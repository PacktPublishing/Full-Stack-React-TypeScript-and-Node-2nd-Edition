import { describe, it } from "node:test";
import { avatars } from "../../__test__/avatar";
import { faker } from "@faker-js/faker";
import request from "supertest";
import assert from "node:assert";
import { serializeBigInt } from "lib";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import Api from "../../app";

describe("POST /work_resp/new", () => {
  it("create response to a work", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;
    const agent = request.agent(app);

    const author = await repo.Profile.insertProfile(
      getRandomizedUserName(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();
    const responder = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
      avatars[0]
    );

    const topic = await repo.Topic.insertTopic(faker.company.name());

    await agent
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);

    const title = faker.lorem.sentence(1);
    const workDesc = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const workResp = await agent
      .post("/work/new")
      .attach("images[0][image]", avatars[0])
      .field("images[0][imagesPlaceholder]", "A")
      .field("title", title)
      .field("description", workDesc)
      .field("content", content)
      .field("authorId", author.id.toString())
      .field("topicIds[0]", topic.id.toString())
      .expect("Content-Type", /json/)
      .expect(200);
    const workId = workResp.body;

    const responseStr = faker.lorem.sentence(1);
    await agent
      .post("/work_resp/new")
      .send({
        workId: serializeBigInt(workId),
        responderId: serializeBigInt(responder.id),
        response: responseStr,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const workResp = await repo.WorkResp.selectWorkResponses(workId, 1);
        assert.equal(workResp[0].id, BigInt(res.body));
      });
    cleanup();
  });
});

describe("POST /work_resp", () => {
  it("get response to a work", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const responder = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topic.id],
      [
        {
          imagePlaceholder: "A",
          image: avatars[0],
        },
        {
          imagePlaceholder: "B",
          image: avatars[1],
        },
      ]
    );

    const responses: string[] = new Array(10);
    for (let i = 0; i < 10; i++) {
      responses[i] = faker.lorem.sentence(1);
      await repo.WorkResp.insertWorkResponse(
        work.id,
        responder.id,
        responses[i]
      );
    }
    const firstFive = await repo.WorkResp.selectWorkResponses(work.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_resp")
      .send({
        id: serializeBigInt(work.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect(200)
      .then((res) => {
        const workResp: {
          id: bigint;
          createdAt: Date;
          updatedAt: Date;
          response: string;
          work: {
            title: string;
          };
        }[] = res.body;

        const revResponses = responses.reverse();
        assert.equal(workResp[0].response, revResponses[5]);
      });
    cleanup();
  });
});

describe("POST /work_resp_author", () => {
  it("get work responses by author", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const responder = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topic.id],
      [
        {
          imagePlaceholder: "A",
          image: avatars[0],
        },
        {
          imagePlaceholder: "B",
          image: avatars[1],
        },
      ]
    );

    const responses: string[] = new Array(10);
    for (let i = 0; i < 10; i++) {
      responses[i] = faker.lorem.sentence(1);
      await repo.WorkResp.insertWorkResponse(
        work.id,
        responder.id,
        responses[i]
      );
    }
    const firstFive = await repo.WorkResp.selectWorkResponsesByAuthor(
      responder.id,
      5
    );
    const lastCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_resp_author")
      .send({
        id: serializeBigInt(responder.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect(200)
      .then((res) => {
        const workResp: {
          id: bigint;
          createdAt: Date;
          updatedAt: Date;
          response: string;
          work: {
            title: string;
          };
        }[] = res.body;

        const revResponses = responses.reverse();
        assert.equal(workResp[0].response, revResponses[5]);
      });
    cleanup();
  });
});
