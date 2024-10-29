import { describe, it } from "node:test";
import { repo } from "../../routes/RepoInstance";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar";
import assert from "node:assert";

describe("Repository Follow", () => {
  it("Create new follower and followed, and confirm creation", async () => {
    const follower = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const followed = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const follow = await repo.Follow.insertFollow(followed.id, follower.id);

    assert.equal(follow.followerId, follower.id);
    assert.equal(follow.followedId, followed.id);
  });

  it("Create new followers and do a paged retrieval", async () => {
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

    const all = await repo.Follow.selectFollowers(followed.id, 10);
    const firstFive = await repo.Follow.selectFollowers(followed.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].followId;

    const nextFive = await repo.Follow.selectFollowers(
      followed.id,
      5,
      lastCursor
    );
    assert.equal(nextFive[0].followId, all[5].followId);
    assert.equal(
      nextFive[nextFive.length - 1].followId,
      all[all.length - 1].followId
    );
  });

  it("Create new following and get them all back", async () => {
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

    const all = await repo.Follow.selectFollowed(follower.id, 10);
    const firstFive = await repo.Follow.selectFollowed(follower.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].followId;

    const nextFive = await repo.Follow.selectFollowed(
      follower.id,
      5,
      lastCursor
    );
    assert.equal(nextFive[0].followId, all[5].followId);
    assert.equal(
      nextFive[nextFive.length - 1].followId,
      all[all.length - 1].followId
    );
  });

  it("Get follower count", async () => {
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

    const count = await repo.Follow.selectFollowersCount(followed.id);
    assert.equal(count, followerIds.length);
  });

  it("Get followed count", async () => {
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
      followedIds[i] = follower.id;
      await repo.Follow.insertFollow(followed.id, follower.id);
    }

    const count = await repo.Follow.selectFollowedCount(follower.id);
    assert.equal(count, followedIds.length);
  });
});
