import { describe, it } from "node:test";
import { repo } from "../../routes/RepoInstance";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar";
import assert from "node:assert";

describe("Repository Follow", () => {
  it("Create new follower and followed, and confirm creation", async () => {
    const follower = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const followed = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const follow = await repo.Follow.insertFollow(followed.id, follower.id);

    assert.equal(follow.followerId, follower.id);
    assert.equal(follow.followedId, followed.id);
  });

  it("Create new followers and get them all back", async () => {
    const followed = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const followerIds: bigint[] = new Array(3);
    for (let i = 0; i < 3; i++) {
      const follower = await repo.Profile.insertProfile(
        faker.internet.userName(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.lorem.sentence(6),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followerIds[i] = follower.id;
      await repo.Follow.insertFollow(followed.id, follower.id);
    }

    const followersSelected = await repo.Follow.selectFollowers(followed.id);
    const selectedIds = followersSelected.map((item) => item.id);
    console.log("selectedIds", selectedIds);
    assert.equal(followersSelected.length, 3);
    assert.equal(selectedIds.includes(followerIds[0]), true);
    assert.equal(selectedIds.includes(followerIds[1]), true);
    assert.equal(selectedIds.includes(followerIds[2]), true);
  });

  it("Create new following and get them all back", async () => {
    const follower = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const followedIds: bigint[] = new Array(3);
    for (let i = 0; i < 3; i++) {
      const followed = await repo.Profile.insertProfile(
        faker.internet.userName(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.lorem.sentence(6),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      followedIds[i] = followed.id;
      await repo.Follow.insertFollow(followed.id, follower.id);
    }

    const followedSelected = await repo.Follow.selectFollowing(follower.id);
    const selectedIds = followedSelected.map((item) => item.id);
    console.log("selectedIds", selectedIds);
    assert.equal(followedSelected.length, 3);
    assert.equal(selectedIds.includes(followedIds[0]), true);
    assert.equal(selectedIds.includes(followedIds[1]), true);
    assert.equal(selectedIds.includes(followedIds[2]), true);
  });
});
