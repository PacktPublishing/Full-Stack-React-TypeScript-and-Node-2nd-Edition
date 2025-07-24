import { describe, it } from "node:test";
import { avatars, getAvatar } from "../../__test__/avatar";
import { faker } from "@faker-js/faker";
import request from "supertest";
import express, { Router } from "express";
import assert from "node:assert";
import { serializeBigInt } from "lib";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { OctetType } from "../../controllers/lib/Constants";
import multer from "multer";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import { createProfile, login } from "../../controllers/ProfileController";
import { createTopic } from "../../controllers/TopicController";
import { authenticationHandler } from "../../middleware/Authenticate";
import { createWork } from "../../controllers/work/WorkController";
import {
  createWorkResponse,
  getWorkResponses,
  getWorkResponsesByAuthor,
} from "../../controllers/work/WorkResponseController";

describe("POST /work_resp/new", () => {
  it("create response to a work", async () => {
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
      authenticationHandler,
      upload.array("images", 10),
      (req, res, next) => createWork(req, res, next, repo)
    );
    router.post("/work_resp/new", authenticationHandler, (req, res, next) =>
      createWorkResponse(req, res, next, repo)
    );
    app.use(router);

    const authorResp = await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("userName", getRandomizedUserName())
      .field("password", faker.internet.password())
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(2))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(200);
    const authorId = authorResp.body;

    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();
    const responder = await request(app)
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
    const responderId = responder.body;

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { accessToken } = loginResponse.body;

    const topicResp = await request(app)
      .post("/topic/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        name: faker.company.name(),
      })
      .expect("Content-Type", /json/)
      .expect(200);
    const topicId = topicResp.body;

    const title = faker.lorem.sentence(1);
    const workDesc = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const workResp = await request(app)
      .post("/work/new")
      .auth(accessToken, { type: "bearer" })
      .attach("images[0][image]", avatars[0])
      .field("images[0][imagesPlaceholder]", "A")
      .field("title", title)
      .field("description", workDesc)
      .field("content", content)
      .field("authorId", serializeBigInt(authorId))
      .field("topicIds[0]", topicId)
      .expect("Content-Type", /json/)
      .expect(200);
    const workId = workResp.body;

    const responseStr = faker.lorem.sentence(1);
    await request(app)
      .post("/work_resp/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        workId: serializeBigInt(workId),
        responderId: serializeBigInt(responderId),
        response: responseStr,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const workResp = await repo.WorkResp.selectWorkResponses(workId, 1);
        assert.equal(workResp[0].id, BigInt(res.body));
      });
    cleanup();
  });
});

describe("POST /work_resp", () => {
  it("get response to a work", async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const { repo, cleanup } = await createClientAndTestDb();
    const router = Router();
    router.post("/work_resp", (req, res, next) =>
      getWorkResponses(req, res, next, repo)
    );
    app.use(router);

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const responder = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
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
    cleanup();
  });
});

describe("POST /work_resp_author", () => {
  it("get work responses by author", async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const { repo, cleanup } = await createClientAndTestDb();
    const router = Router();
    router.post("/work_resp_author", (req, res, next) =>
      getWorkResponsesByAuthor(req, res, next, repo)
    );
    app.use(router);

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const responder = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
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
    const firstFive = await repo.WorkResp.selectWorkResponsesByAuthor(
      responder.id,
      5
    );
    const lastCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_resp_author")
      .send({
        id: serializeBigInt(responder.id),
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
    cleanup();
  });
});
