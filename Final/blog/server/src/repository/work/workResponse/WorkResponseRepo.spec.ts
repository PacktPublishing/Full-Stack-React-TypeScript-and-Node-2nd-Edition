import { describe, it } from "node:test";
import { repo } from "../../../routes/RepoInstance";
import { faker } from "@faker-js/faker";
import { avatars, getAvatar } from "../../../__test__/avatar";
import assert from "node:assert";

describe("Repository WorkResponse", () => {
  it("Create WorkResponse and verify it", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    const author = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const responder = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topic.id]
    );

    const response = faker.lorem.sentence(5);
    await repo.WorkResp.insertWorkResponse(work.id, responder.id, response);
    const selectedWorkResponse = await repo.WorkResp.selectWorkResponses(
      work.id
    );

    assert.equal(selectedWorkResponse[0].work.title, work.title);
    assert.equal(selectedWorkResponse[0].response, response);
  });
});
