import { describe, it } from "node:test";
import { repo } from "../../../routes/RepoInstance";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../../__test__/avatar";
import assert from "node:assert";

describe("Repository Like", () => {
  it("Create like and verify", async () => {
    const author = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const work = await repo.Work.insertWork(
      faker.lorem.sentence(6),
      faker.lorem.sentence(10),
      faker.lorem.sentences(2),
      author.id,
      [topic.id]
    );
    const liker = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const like = await repo.WorkLikes.insertWorkLike(work.id, liker.id);
    assert.equal(like.likerId, liker.id);
  });

  it("Create likes for a work and retrieve all of them", async () => {
    const author = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const work = await repo.Work.insertWork(
      faker.lorem.sentence(6),
      faker.lorem.sentence(10),
      faker.lorem.sentences(2),
      author.id,
      [topic.id]
    );

    const likeIds: bigint[] = new Array(3);
    for (let i = 0; i < 3; i++) {
      const liker = await repo.Profile.insertProfile(
        faker.internet.userName(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      const like = await repo.WorkLikes.insertWorkLike(work.id, liker.id);
      likeIds[i] = like.id;
    }

    const selectedLikes = await repo.WorkLikes.selectWorkLikes(work.id);
    assert.equal(selectedLikes.length, 3);
    const selectedIds = selectedLikes.map((item) => item.id);
    assert.equal(selectedIds.includes(likeIds[0]), true);
    assert.equal(selectedIds.includes(likeIds[1]), true);
    assert.equal(selectedIds.includes(likeIds[2]), true);
  });
});
