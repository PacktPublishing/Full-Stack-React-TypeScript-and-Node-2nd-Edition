import { describe, it } from "node:test";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
describe("Repository Follow", () => {
    it("Create new follower and followed, and confirm creation", async () => {
        const { repo, cleanup } = await createClientAndTestDb();
        const follower = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
        const followed = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
        const follow = await repo.Follow.insertFollow(followed.id, follower.id);
        assert.equal(follow.followerId, follower.id);
        assert.equal(follow.followedId, followed.id);
        await cleanup();
    });
    it("Create new followers and do a paged retrieval", async () => {
        const { repo, cleanup } = await createClientAndTestDb();
        const followed = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
        const followersCount = 10;
        const followerProfileIds = new Array(followersCount);
        for (let i = 0; i < followersCount; i++) {
            const followerProfile = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
            followerProfileIds[i] = followerProfile.id;
            await repo.Follow.insertFollow(followed.id, followerProfile.id);
        }
        const all = await repo.Follow.selectFollowers(followed.id, 10);
        const firstFive = await repo.Follow.selectFollowers(followed.id, 5);
        const lastCursor = firstFive[firstFive.length - 1].followId;
        const nextFive = await repo.Follow.selectFollowers(followed.id, 5, lastCursor);
        assert.equal(nextFive[0].followId, all[5].followId);
        assert.equal(nextFive[nextFive.length - 1].followId, all[all.length - 1].followId);
        await cleanup();
    });
    it("Create new following and get them all back", async () => {
        const { repo, cleanup } = await createClientAndTestDb();
        const follower = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
        const followedCount = 10;
        const followedIds = new Array(followedCount);
        for (let i = 0; i < followedCount; i++) {
            const followed = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
            followedIds[i] = followed.id;
            await repo.Follow.insertFollow(followed.id, follower.id);
        }
        const all = await repo.Follow.selectFollowed(follower.id, 10);
        const firstFive = await repo.Follow.selectFollowed(follower.id, 5);
        const lastCursor = firstFive[firstFive.length - 1].followId;
        const nextFive = await repo.Follow.selectFollowed(follower.id, 5, lastCursor);
        assert.equal(nextFive[0].followId, all[5].followId);
        assert.equal(nextFive[nextFive.length - 1].followId, all[all.length - 1].followId);
        await cleanup();
    });
    it("Get follower count", async () => {
        const { repo, cleanup } = await createClientAndTestDb();
        const followed = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
        const followerCount = 10;
        const followerIds = new Array(followerCount);
        for (let i = 0; i < followerCount; i++) {
            const follower = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
            followerIds[i] = follower.id;
            await repo.Follow.insertFollow(followed.id, follower.id);
        }
        const count = await repo.Follow.selectFollowersCount(followed.id);
        assert.equal(count, followerIds.length);
        await cleanup();
    });
    it("Get followed count", async () => {
        const { repo, cleanup } = await createClientAndTestDb();
        const follower = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
        const followedCount = 10;
        const followedIds = new Array(followedCount);
        for (let i = 0; i < followedCount; i++) {
            const followed = await repo.Profile.insertProfile(faker.internet.username(), faker.internet.password(), faker.internet.displayName(), faker.lorem.sentence(5), faker.internet.url(), faker.internet.url(), getAvatar());
            followedIds[i] = follower.id;
            await repo.Follow.insertFollow(followed.id, follower.id);
        }
        const count = await repo.Follow.selectFollowedCount(follower.id);
        assert.equal(count, followedIds.length);
        await cleanup();
    });
});
