import { describe, it } from "node:test";
import { createClientAndTestDb } from "../__test__/lib/DbTestUtils";
import request from "supertest";
import { getRandomizedUserName } from "../__test__/lib/TestData";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../__test__/avatar";
import { OctetType } from "../controllers/lib/Constants";
import { serializeBigInt } from "lib";
import Api from "../app";

describe("Authorization Middleware", () => {
  it("should first fail user and then authorize user", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;
    const agent = request.agent(app);

    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();

    const profileResp = await agent
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
    const profileId = profileResp.body;

    await agent
      .post("/profile/update")
      .auth("", { type: "bearer" }) // notice no token!
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("profileId", serializeBigInt(profileId).toString())
      .field("fullName", fullName)
      .field("password", password)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(401);

    await agent
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);

    await agent
      .post("/profile/update")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("profileId", serializeBigInt(profileId).toString())
      .field("fullName", fullName)
      .field("password", password)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(204);

    cleanup();
  });
});
