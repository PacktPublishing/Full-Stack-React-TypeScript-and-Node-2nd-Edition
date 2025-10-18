import { describe, it } from "node:test";
import request from "supertest";
import assert from "node:assert";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar";
import { serializeBigInt } from "lib/src/JsonUtils";
import type { ProfileModel } from "../profile/ProfileModel";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { OctetType } from "../../controllers/lib/Constants";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import Api from "../../app";

describe("POST /follow/new", () => {
  it("create new follow and return 200", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;
    const agent = request.agent(app);

    const userName = getRandomizedUserName();
    const password = faker.internet.password();

    const profilea = await agent
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
    const profileaId = profilea.body;

    const profileb = await agent
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: OctetType,
      })
      .field("userName", getRandomizedUserName())
      .field("password", faker.internet.password())
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(3))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(200);
    const profilebId = profileb.body;

    await agent
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);

    await agent
      .post("/follow/new")
      .send({
        followedId: profileaId,
        followerId: profilebId,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });

    cleanup();
  });
});

describe("POST /follow/followers", async () => {
  it("should return list of followers", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    cleanup();
  });

  it("should return next page of followers", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    cleanup();
  });
});

describe("POST /follow/followed", async () => {
  it("should return list of followed", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    cleanup();
  });

  it("should return next page of followed", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    cleanup();
  });
});

describe("GET /follow/follower/count", () => {
  it("get follower count", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    cleanup();
  });
});

describe("GET /follow/followed/count", () => {
  it("get followed count", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    cleanup();
  });
});
