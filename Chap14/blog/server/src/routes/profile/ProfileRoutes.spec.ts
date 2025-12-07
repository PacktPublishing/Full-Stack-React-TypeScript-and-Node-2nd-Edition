import { describe, it } from "node:test";
import request from "supertest";
import { avatars, getAvatar } from "../../__test__/avatar";
import { OctetType } from "../../controllers/lib/Constants";
import assert from "node:assert";
import { faker } from "@faker-js/faker";
import type { ProfileModel } from "./ProfileModel";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import Api from "../../app";

describe("POST /profile/avatar/new", () => {
  it("create profile avatar", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;
    const agent = request.agent(app);

    const userName = getRandomizedUserName();
    const password = faker.internet.password();
    await repo.Profile.insertProfile(
      userName,
      password,
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    await agent
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);

    await agent
      .post("/profile/avatar/new")
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
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

describe("POST /profile/logout", () => {
  it("logout profile", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;
    const agent = request.agent(app);

    const userName = getRandomizedUserName();
    const password = faker.internet.password();
    await agent
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

    await agent
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    await agent.post("/profile/logout").expect(204);

    cleanup();
  });
});

describe("POST /profile/new", () => {
  it("create new profile", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

  it.only("test create new profile validation", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("userName", "")
      .field("password", faker.internet.password())
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(3))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(400)
      .then((res) => {
        console.log("body:", res.body);
        assert.equal(res.statusCode, 400);
        assert.equal(res.body.message, "Validation failure");
        assert.equal(res.body.errors.length > 0, true);
      });

    cleanup();
  });
});

describe("POST /profile/update", () => {
  it("update profile", async () => {
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
      .field("profileId", profileId.toString())
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
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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
