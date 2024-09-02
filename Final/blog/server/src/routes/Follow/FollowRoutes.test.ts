import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import assert from "node:assert";
import { repo } from "../RepoInstance";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar";
import { serializeBigInt } from "common/src/JsonUtils";
import { ProfileModel } from "../Profile/ProfileModel";

describe("POST /follow", () => {
  it("should return status code 200", async () => {
    await request(app)
      .post("/follow")
      .send({
        followedId: 1,
        followerId: 2,
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
      faker.internet.userName(),
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
        faker.internet.userName(),
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
        profileId: serializeBigInt(followed.id),
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
      faker.internet.userName(),
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
        faker.internet.userName(),
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
        profileId: serializeBigInt(followed.id),
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
      faker.internet.userName(),
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
        faker.internet.userName(),
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
        profileId: serializeBigInt(follower.id),
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
      faker.internet.userName(),
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
        faker.internet.userName(),
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
        profileId: serializeBigInt(follower.id),
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