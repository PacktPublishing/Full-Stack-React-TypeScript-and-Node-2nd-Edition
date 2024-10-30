import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import { avatars, getAvatar } from "../../__test__/avatar";
import { octetType } from "../../controllers/lib/Constants";
import { repo } from "../RepoInstance";
import assert from "node:assert";
import { faker } from "@faker-js/faker";
import { ProfileModel } from "./ProfileModel";
import { serializeBigInt } from "common";
import { getRandomizedUserName } from "../../__test__/lib/TestData";

describe("POST /profile/avatar/new", () => {
  it("create profile avatar", async () => {
    await request(app)
      .post("/profile/avatar/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });
  });
});

describe("GET /profile/avatar/:avatarId", () => {
  it("get profile avatar", async () => {
    const avatar = await repo.ProfileAvatar.insertProfileAvatar(avatars[0]);

    await request(app)
      .get(`/profile/avatar/${avatar.id}`)
      .expect(200)
      .expect("Content-Type", "application/octet-stream")
      .then((res) => {
        assert.deepStrictEqual(res.body, Buffer.from(avatar.avatar));
      });
  });
});

describe("POST /profile/login", () => {
  it("login profile", async () => {
    const userName = getRandomizedUserName();
    const password = faker.internet.password();
    await request(app)
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
  });
});

describe("POST /profile/new", () => {
  it("create new profile", async () => {
    await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
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
  });
});

describe("POST /profile/update", () => {
  it("update profile", async () => {
    const profile = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    const fullName = faker.internet.displayName();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();
    await request(app)
      .post("/profile/update")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .field("profileId", serializeBigInt(profile.id))
      .field("fullName", fullName)
      .field("description", description)
      .field("socialLinkPrimary", socialLinkPrimary)
      .field("socialLinkSecondary", socialLinkSecondary)
      .expect(204)
      .then((res) => {
        assert.equal(res.statusCode, 204);
      });

    const updatedProfile = await repo.Profile.selectProfile(profile.id);
    assert.equal(fullName, updatedProfile?.fullName);
  });
});

describe("GET /profile/:profileId", () => {
  it("get profile", async () => {
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
  });
});

describe("GET /profile_popular", () => {
  it("get profile popular", async () => {
    await request(app)
      .get("/profile_popular")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(async (res) => {
        const popularProfiles: ProfileModel[] = res.body;
        assert.equal(popularProfiles.length > 0, true);
      });
  });
});
