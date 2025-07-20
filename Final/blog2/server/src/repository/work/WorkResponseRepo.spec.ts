import { describe, it } from "node:test";
import { repo } from "../../routes/RepoInstance";
import { faker } from "@faker-js/faker";
import { avatars, getAvatar } from "../../__test__/avatar";
import assert from "node:assert";

describe("Repository WorkResponse", () => {
  it("Create WorkResponse and verify it", async () => {
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
    const responder = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
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

    const responses: string[] = new Array(10);
    for (let i = 0; i < 10; i++) {
      responses[i] = faker.lorem.sentence(5);
      await repo.WorkResp.insertWorkResponse(
        work.id,
        responder.id,
        responses[i]
      );
    }
    const firstFive = await repo.WorkResp.selectWorkResponses(work.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].id;

    const nextFive = await repo.WorkResp.selectWorkResponses(
      work.id,
      5,
      lastCursor
    );

    assert.equal(nextFive[0].response, responses.reverse()[5]);
  });

  it("get work response by author", async () => {
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
    const responder = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
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

    const responses: string[] = new Array(10);
    for (let i = 0; i < 10; i++) {
      responses[i] = faker.lorem.sentence(5);
      await repo.WorkResp.insertWorkResponse(
        work.id,
        responder.id,
        responses[i]
      );
    }
    const firstFive = await repo.WorkResp.selectWorkResponsesByAuthor(
      responder.id,
      5
    );
    const lastCursor = firstFive[firstFive.length - 1].id;

    const nextFive = await repo.WorkResp.selectWorkResponsesByAuthor(
      responder.id,
      5,
      lastCursor
    );

    assert.equal(nextFive[0].response, responses.reverse()[5]);
  });
});
