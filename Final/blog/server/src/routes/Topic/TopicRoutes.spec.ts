import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { octetType } from "../../controllers/lib/Constants";
import { getAvatar } from "../../__test__/avatar";
import { getRandomizedUserName } from "../../__test__/lib/TestData";

describe("POST /topic/new", () => {
  it("create topic", async () => {
    const userName = getRandomizedUserName();
    const password = faker.internet.password();

    const profilea = await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .field("userName", userName)
      .field("password", password)
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(3))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(200);

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { _userId, accessToken } = loginResponse.body;

    const topicName = faker.company.name();
    await request(app)
      .post("/topic/new")
      .auth(accessToken, { type: "bearer" })
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
