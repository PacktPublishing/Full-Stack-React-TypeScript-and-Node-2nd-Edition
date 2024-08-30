import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import { faker } from "@faker-js/faker";
import { serializeBigInt } from "common/src/JsonUtils";
import assert from "node:assert";

describe("POST /topic/new", () => {
  it("create topic", async () => {
    const topicName = faker.company.name();
    await request(app)
      .post("/topic/new")
      .send({
        name: topicName,
      })
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("GET /topic", () => {
  it("get all topics", async () => {
    const topicName = faker.company.name();
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
  });
});
