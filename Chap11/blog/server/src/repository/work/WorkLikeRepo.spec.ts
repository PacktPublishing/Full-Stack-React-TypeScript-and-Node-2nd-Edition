import { describe, it } from "node:test";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";

describe("Repository Like", () => {
  it("Create like and verify", async () => {
    const { repo, cleanup } = await createClientAndTestDb();

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
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
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );

    const like = await repo.WorkLikes.insertWorkLike(work.id, liker.id);
    assert.equal(like.likerId, liker.id);

    cleanup();
  });

  it("Create likes for a work and retrieve all of them", async () => {
    const { repo, cleanup } = await createClientAndTestDb();

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
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
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      const like = await repo.WorkLikes.insertWorkLike(work.id, liker.id);
      likeIds[i] = like.id;
    }

    const selectedLikes = await repo.WorkLikes.selectWorkLikesCount(work.id);
    assert.equal(selectedLikes, 3);

    cleanup();
  });
});
