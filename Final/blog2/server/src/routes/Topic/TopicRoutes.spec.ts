import { after, describe, it } from "node:test";
import request from "supertest";
import express, { Router } from "express";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { OctetType } from "../../controllers/lib/Constants";
import { getAvatar } from "../../__test__/avatar";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import multer from "multer";
import { createProfile, login } from "../../controllers/ProfileController";
import { createTopic, getAllTopics } from "../../controllers/TopicController";

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
router.post("/profile/login", (req, res, next) => login(req, res, next, repo));
router.post("/topic/new", (req, res, next) =>
  createTopic(req, res, next, repo)
);
router.get("/topic", (req, res, next) => getAllTopics(req, res, next, repo));
app.use(router);

after(async () => {
  cleanup();
});

describe("POST /topic/new", () => {
  it("create topic", async () => {
    const userName = getRandomizedUserName();
    const password = faker.internet.password();

    await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
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
    const { accessToken } = loginResponse.body;

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
    const userName = getRandomizedUserName();
    const password = faker.internet.password();

    await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
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
    const { accessToken } = loginResponse.body;

    const topicName = faker.company.name();
    await request(app)
      .post("/topic/new")
      .auth(accessToken, { type: "bearer" })
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
  });
});
