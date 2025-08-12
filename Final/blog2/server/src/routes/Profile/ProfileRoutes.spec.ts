import { describe, it } from "node:test";
import request from "supertest";
import express, { Router } from "express";
import { avatars, getAvatar } from "../../__test__/avatar";
import { OctetType } from "../../controllers/lib/Constants";
import assert from "node:assert";
import { faker } from "@faker-js/faker";
import type { ProfileModel } from "./ProfileModel";
import { serializeBigInt } from "lib";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import multer from "multer";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import {
  createProfile,
  createProfileAvatar,
  getMostPopularAuthors,
  getProfile,
  getProfileAvatar,
  login,
  updateProfile,
} from "../../controllers/ProfileController";
import { authorizeHandler } from "../../middleware/AuthorizeHandler";

describe("POST /profile/avatar/new", () => {
  it("create profile avatar", async () => {
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
      "/profile/avatar/new",
      authorizeHandler,
      upload.single("file"),
      (req, res, next) => createProfileAvatar(req, res, next, repo)
    );
    app.use(router);

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
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { accessToken } = loginResponse.body;

    await request(app)
      .post("/profile/avatar/new")
      .auth(accessToken, { type: "bearer" })
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });
    cleanup();
  });
});

describe("GET /profile/avatar/:avatarId", () => {
  it("get profile avatar", async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const { repo, cleanup } = await createClientAndTestDb();
    const router = Router();
    router.get("/profile/avatar/:avatarId", (req, res, next) =>
      getProfileAvatar(req, res, next, repo)
    );
    app.use(router);

    const avatar = await repo.ProfileAvatar.insertProfileAvatar(avatars[0]);

    await request(app)
      .get(`/profile/avatar/${avatar.id}`)
      .expect(200)
      .expect("Content-Type", "application/octet-stream")
      .then((res) => {
        assert.deepStrictEqual(res.body, Buffer.from(avatar.avatar));
      });

    cleanup();
  });
});

describe("POST /profile/login", () => {
  it("login profile", async () => {
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
    app.use(router);

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
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });

    await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });

    cleanup();
  });
});

describe("POST /profile/new", () => {
  it("create new profile", async () => {
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
    app.use(router);

    await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("userName", faker.internet.username())
      .field("password", faker.internet.password())
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(3))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });

    cleanup();
  });
});

describe("POST /profile/update", () => {
  it("update profile", async () => {
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

    const updatedProfile = await repo.Profile.selectProfile(profileId);
    assert.equal(fullName, updatedProfile?.fullName);

    cleanup();
  });
});

describe("GET /profile/:profileId", () => {
  it("get profile", async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const { repo, cleanup } = await createClientAndTestDb();
    const router = Router();
    router.get("/profile/:profileId", (req, res, next) =>
      getProfile(req, res, next, repo)
    );
    app.use(router);

    const profile = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    await request(app)
      .get(`/profile/${profile.id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        const profileResponse: {
          id: bigint;
          createdAt: Date;
          updatedAt: Date;
          userName: string;
          fullName: string;
          description: string | null;
          socialLinkPrimary: string | null;
          socialLinkSecondary: string | null;
          avatarId: bigint | null;
        } = res.body;
        assert.equal(profileResponse.id, profile.id);
      });
    cleanup();
  });
});

describe("GET /profile_popular", () => {
  it("get profile popular", async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const { repo, cleanup } = await createClientAndTestDb();
    const router = Router();
    router.get("/profile_popular", (req, res, next) =>
      getMostPopularAuthors(req, res, next, repo)
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
    await repo.Work.insertWork(
      faker.lorem.sentence(1),
      faker.lorem.paragraph(1),
      faker.lorem.paragraph(3),
      author.id,
      [],
      []
    );

    await request(app)
      .get("/profile_popular")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(async (res) => {
        const popularProfiles: ProfileModel[] = res.body;
        assert.equal(popularProfiles.length > 0, true);
      });
    cleanup();
  });
});
