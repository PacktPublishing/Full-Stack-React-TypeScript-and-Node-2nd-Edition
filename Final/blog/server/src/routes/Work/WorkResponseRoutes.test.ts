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
        const workResp = await repo.WorkResp.selectWorkResponses(work.id, 1);
        assert.equal(workResp[0].id, BigInt(res.body));
      });
  });
});

describe("POST /work_resp", () => {
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
  });
});
