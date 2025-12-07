import { describe, it } from "node:test";
import request from "supertest";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import Api from "../../app";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { getAvatar } from "../../__test__/avatar";
import { OctetType } from "../../controllers/lib/Constants";

describe("POST /topic/new", () => {
  it("create topic", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;
    const agent = request.agent(app);

    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();

    await agent
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("userName", userName)
      .field("password", password)
      .field("fullName", fullName)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(200);

    await agent
      .post("/profile/login")
      .send({
        userName: userName,
        password: password,
      })
      .expect(200);

    const topicName = faker.company.name();
    await agent
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
    const agent = request.agent(app);

    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();

    await agent
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("userName", userName)
      .field("password", password)
      .field("fullName", fullName)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(200);

    await agent
      .post("/profile/login")
      .send({
        userName: userName,
        password: password,
      })
      .expect(200);

    const topicName = faker.company.name();
    await agent
      .post("/topic/new")
      .send({
        name: topicName,
      })
      .expect("Content-Type", /json/)
      .expect(200);

    await agent
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
