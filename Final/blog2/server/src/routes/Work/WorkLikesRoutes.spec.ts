import { describe, it } from "node:test";
import request from "supertest";
import express, { Router } from "express";
import { faker } from "@faker-js/faker";
import { avatars, getAvatar } from "../../__test__/avatar";
import { serializeBigInt } from "lib";
import assert from "node:assert";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { OctetType } from "../../controllers/lib/Constants";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import { createProfile, login } from "../../controllers/ProfileController";
import { createTopic } from "../../controllers/TopicController";
import { createWork } from "../../controllers/work/WorkController";
import multer from "multer";
import { createWorkLike } from "../../controllers/work/WorkLikesController";
import { authorizeHandler } from "../../middleware/AuthorizeHandler";

describe("POST /work_like/new", () => {
  it("create work like", async () => {
    const storage = multer.memoryStorage();
    const upload = multer({ storage });
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const { repo, cleanup } = await createClientAndTestDb();
    const router = Router();
    router.post("/profile/new", upload.single("file"), (req, res, next) =>
      createProfile(req, res, next, repo)
    );
    router.post("/profile/login", (req, res, next) =>
      login(req, res, next, repo)
    );
    router.post("/topic/new", (req, res, next) =>
      createTopic(req, res, next, repo)
    );
    router.post(
      "/work/new",
      authorizeHandler,
      upload.array("images", 10),
      (req, res, next) => createWork(req, res, next, repo)
    );
    router.post("/work_like/new", authorizeHandler, (req, res, next) =>
      createWorkLike(req, res, next, repo)
    );
    app.use(router);

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

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { accessToken } = loginResponse.body;

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
      .then(async () => {
        const workLikes = await repo.WorkLikes.selectWorkLikesCount(workId);
        assert.equal(workLikes > 0, true);
      });

    cleanup();
  });
});
