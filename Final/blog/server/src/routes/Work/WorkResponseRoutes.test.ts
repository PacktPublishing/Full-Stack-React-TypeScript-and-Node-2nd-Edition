import { describe, it } from "node:test";
import { avatars } from "../../__test__/avatar";
import { faker } from "@faker-js/faker";
import { repo } from "../RepoInstance";
import request from "supertest";
import app from "../../app";
import assert from "node:assert";
import { serializeBigInt } from "common";

describe("POST /work_resp/new", () => {
  it("create response to a work", async () => {
    const author = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const responder = await repo.Profile.insertProfile(
      faker.internet.userName(),
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
    const responseStr = faker.lorem.sentence(1);

    await request(app)
      .post("/work_resp/new")
      .send({
        workId: serializeBigInt(work.id),
        responderId: serializeBigInt(responder.id),
        response: responseStr,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const workResp = await repo.WorkResp.selectWorkResponses(work.id);
        assert.equal(workResp[0].id, BigInt(res.body));
      });
  });
});

describe("GET /work_resp/:workId", () => {
  it("get response to a work", async () => {
    const author = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const responder = await repo.Profile.insertProfile(
      faker.internet.userName(),
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
    const responseStr = faker.lorem.sentence(1);
    const workResponse = await repo.WorkResp.insertWorkResponse(
      work.id,
      responder.id,
      responseStr
    );

    await request(app)
      .get(`/work_resp/${work.id}`)
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

        assert.equal(workResp[0].work.title, work.title);
        assert.equal(workResp[0].id, workResponse.id);
        assert.equal(workResp[0].response, responseStr);
      });
  });
});
