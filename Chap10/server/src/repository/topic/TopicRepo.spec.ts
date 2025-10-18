import { describe, it } from "node:test";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";

describe("Repository Topic", () => {
  it("Create topic and verify it", async () => {
    const { repo, cleanup } = await createClientAndTestDb();

    const topic = await repo.Topic.insertTopic(faker.company.name());
    const selectedTopics = await repo.Topic.selectAllTopics();
    assert.equal(
      selectedTopics.map((item) => item.id).includes(topic.id),
      true
    );

    cleanup();
  });
});
