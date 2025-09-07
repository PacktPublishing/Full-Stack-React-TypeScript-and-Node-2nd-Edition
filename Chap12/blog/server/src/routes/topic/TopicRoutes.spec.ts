import { describe, it } from "node:test";
import request from "supertest";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import Api from "../../app";

describe("POST /topic/new", () => {
  it("create topic", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const topicName = faker.company.name();
    await request(app)
      .post("/topic/new")
      .send({
        name: topicName,
      })
      .expect("Content-Type", /json/)
      .expect(200);

    cleanup();
  });
});

describe("GET /topic", () => {
  it("get all topics", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const topicName = faker.company.name();
    await request(app)
      .post("/topic/new")
      .send({
        name: topicName,
      })
      .expect("Content-Type", /json/)
      .expect(200);

    await request(app)
      .get("/topic")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        const result: {
          id: bigint;
          createdAt: Date;
          updatedAt: Date;
          name: string;
        }[] = res.body;
        assert.equal(result.length > 0, true);
      });

    cleanup();
  });
});
