import { faker } from "@faker-js/faker";
import { describe, it } from "node:test";
import { getAvatar } from "../../__test__/avatar";
import { repo } from "../../routes/RepoInstance";
import assert from "node:assert";

describe("Repository WorkTopic", () => {
  it("Create WorkTopic and verify it", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
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
      title,
      description,
      content,
      author.id,
      [topic.id]
    );

    const workTopics = await repo.WorkTopic.selectWorkTopicsByWork(work.id);
    assert.equal(workTopics[0].workId, work.id);
  });
});
