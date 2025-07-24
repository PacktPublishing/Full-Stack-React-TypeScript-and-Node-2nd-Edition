import { describe, it } from "node:test";
import {
  createProfile,
  login,
  updateProfile,
} from "../controllers/ProfileController";
import { createClientAndTestDb } from "../__test__/lib/DbTestUtils";
import express, { Router } from "express";
import multer from "multer";
import { authorizeHandler } from "./AuthorizeHandler";
import request from "supertest";
import { getRandomizedUserName } from "../__test__/lib/TestData";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../__test__/avatar";
import { OctetType } from "../controllers/lib/Constants";
import { serializeBigInt } from "lib";

describe("Authorization Middleware", () => {
  it("should first fail user and then authorize user", async () => {
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
    router.post(
      "/profile/update",
      authorizeHandler,
      upload.single("file"),
      (req, res, next) => updateProfile(req, res, next, repo)
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

    await request(app)
      .post("/profile/update")
      .auth("", { type: "bearer" })
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("profileId", serializeBigInt(profileId))
      .field("fullName", fullName)
      .field("password", password)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(401);

    await request(app)
      .post("/profile/update")
      .auth(accessToken, { type: "bearer" })
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("profileId", serializeBigInt(profileId))
      .field("fullName", fullName)
      .field("password", password)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(204);

    cleanup();
  });
});
