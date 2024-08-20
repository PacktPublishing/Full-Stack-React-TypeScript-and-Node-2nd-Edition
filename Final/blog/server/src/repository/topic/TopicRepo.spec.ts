import { describe, it } from "node:test";
import { repo } from "../../routes/RepoInstance";
import { faker } from "@faker-js/faker";
import assert from "node:assert";

describe("Repository Topic", () => {
  it("Create topic and verify it", async () => {
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const selectedTopics = await repo.Topic.selectAllTopics();
    assert.equal(
      selectedTopics.map((item) => item.id).includes(topic.id),
      true
    );
  });
});
