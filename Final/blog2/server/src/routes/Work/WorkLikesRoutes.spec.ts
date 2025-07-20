import { describe, it } from "node:test";
import app from "../../app";
import request from "supertest";
import { repo } from "../RepoInstance";
import { faker } from "@faker-js/faker";
import { avatars, getAvatar } from "../../__test__/avatar";
import { serializeBigInt } from "common";
import assert from "node:assert";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { octetType } from "../../controllers/lib/Constants";

describe("POST /work_like/new", () => {
  it("create work like", async () => {
    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();

    const profileResp = await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .field("userName", userName)
      .field("password", password)
      .field("fullName", fullName)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(200);
    const profileId = profileResp.body;

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { _userId, accessToken } = loginResponse.body;

    const topicName = faker.company.name();
    const topicResp = await request(app)
      .post("/topic/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        name: topicName,
      })
      .expect("Content-Type", /json/)
      .expect(200);
    const topicId = topicResp.body;

    const title = faker.lorem.sentence(1);
    const workDesc = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const authorId = serializeBigInt(profileId);
    const workResp = await request(app)
      .post("/work/new")
      .auth(accessToken, { type: "bearer" })
      .attach("images[0][image]", avatars[0])
      .field("images[0][imagesPlaceholder]", "A")
      .field("title", title)
      .field("description", workDesc)
      .field("content", content)
      .field("authorId", authorId)
      .field("topicIds[0]", topicId)
      .expect("Content-Type", /json/)
      .expect(200);
    const workId = workResp.body;

    await request(app)
      .post("/work_like/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        workId: serializeBigInt(workId),
        likerId: serializeBigInt(profileId),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const workLikes = await repo.WorkLikes.selectWorkLikesCount(workId);
        assert.equal(workLikes > 0, true);
      });
  });
});
