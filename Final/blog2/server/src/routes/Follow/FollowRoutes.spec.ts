import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import assert from "node:assert";
import { repo } from "../RepoInstance";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar";
import { serializeBigInt } from "common/src/JsonUtils";
import { ProfileModel } from "../Profile/ProfileModel";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { octetType } from "../../controllers/lib/Constants";

describe("POST /follow/new", () => {
  it("create new follow and return 200", async () => {
    const userName = getRandomizedUserName();
    const password = faker.internet.password();

    const profilea = await request(app)
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
      .expect(200);
    const profileaId = profilea.body;
    const profileb = await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .field("userName", getRandomizedUserName())
      .field("password", faker.internet.password())
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(3))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(200);
    const profilebId = profilea.body;

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { _userId, accessToken } = loginResponse.body;

    await request(app)
      .post("/follow/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        followedId: profileaId,
        followerId: profilebId,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });
  });
});

describe("POST /follow/followers", () => {
  it("should return list of followers", async () => {
    const followed = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const followersCount = 10;
    const followerProfileIds: bigint[] = new Array(followersCount);
    for (let i = 0; i < followersCount; i++) {
      const followerProfile = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followerProfileIds[i] = followerProfile.id;
      await repo.Follow.insertFollow(followed.id, followerProfile.id);
    }

    await request(app)
      .post("/follow/followers")
      .send({
        id: serializeBigInt(followed.id),
        pageSize: 10,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
        const followers: ProfileModel[] = res.body;
        assert.equal(followers.length, 10);
      });
  });

  it("should return next page of followers", async () => {
    const followed = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const followersCount = 10;
    const followerProfileIds: bigint[] = new Array(followersCount);
    for (let i = 0; i < followersCount; i++) {
      const followerProfile = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followerProfileIds[i] = followerProfile.id;
      await repo.Follow.insertFollow(followed.id, followerProfile.id);
    }
    const firstFive = await repo.Follow.selectFollowers(followed.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].followId;

    await request(app)
      .post("/follow/followers")
      .send({
        id: serializeBigInt(followed.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
        const followers: ProfileModel[] = res.body;
        assert.equal(followers.length, 5);
        assert.equal(followers[followers.length - 1].id, followerProfileIds[0]);
      });
  });
});

describe("POST /follow/followed", () => {
  it("should return list of followed", async () => {
    const follower = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const followedCount = 10;
    const followedIds: bigint[] = new Array(followedCount);
    for (let i = 0; i < followedCount; i++) {
      const followed = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followedIds[i] = followed.id;
      await repo.Follow.insertFollow(followed.id, follower.id);
    }

    await request(app)
      .post("/follow/followed")
      .send({
        id: serializeBigInt(follower.id),
        pageSize: 10,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
        const followed: ProfileModel[] = res.body;
        assert.equal(followed.length, 10);
      });
  });

  it("should return next page of followed", async () => {
    const follower = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const followedCount = 10;
    const followedIds: bigint[] = new Array(followedCount);
    for (let i = 0; i < followedCount; i++) {
      const followed = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followedIds[i] = followed.id;
      await repo.Follow.insertFollow(followed.id, follower.id);
    }
    const firstFive = await repo.Follow.selectFollowed(follower.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].followId;

    await request(app)
      .post("/follow/followed")
      .send({
        id: serializeBigInt(follower.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
        const followed: ProfileModel[] = res.body;
        assert.equal(followed.length, 5);
        assert.equal(followed[followed.length - 1].id, followedIds[0]);
      });
  });
});

describe("GET /follow/follower/count", () => {
  it("get follower count", async () => {
    const followed = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const followerCount = 10;
    const followerIds: bigint[] = new Array(followerCount);
    for (let i = 0; i < followerCount; i++) {
      const follower = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followerIds[i] = follower.id;
      await repo.Follow.insertFollow(followed.id, follower.id);
    }

    await request(app)
      .get(`/follow/followers/count/${followed.id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.body, followerIds.length);
      });
  });
});

describe("GET /follow/followed/count", () => {
  it("get followed count", async () => {
    const follower = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const followedCount = 10;
    const followedIds: bigint[] = new Array(followedCount);
    for (let i = 0; i < followedCount; i++) {
      const followed = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followedIds[i] = followed.id;
      await repo.Follow.insertFollow(followed.id, follower.id);
    }

    await request(app)
      .get(`/follow/followed/count/${follower.id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.body, followedIds.length);
      });
  });
});
