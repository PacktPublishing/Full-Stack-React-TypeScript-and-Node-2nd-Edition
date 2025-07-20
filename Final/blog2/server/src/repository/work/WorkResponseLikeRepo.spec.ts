import { faker } from "@faker-js/faker";
import { describe, it } from "node:test";
import { avatars, getAvatar } from "../../__test__/avatar";
import { repo } from "../../routes/RepoInstance";
import assert from "node:assert";

describe("Repository WorkResponseLike", () => {
  it("Create WorkResponseLike and verify it", async () => {
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

    const response = faker.lorem.sentence(5);
    const workResponse = await repo.WorkResp.insertWorkResponse(
      work.id,
      responder.id,
      response
    );

    const responseLiker = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const responseLike = await repo.WorkRespLike.insertWorkRespLike(
      workResponse.id,
      responseLiker.id
    );

    assert.equal(responseLike.workResponseId, workResponse.id);
  });
});
