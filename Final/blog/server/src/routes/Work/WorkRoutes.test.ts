import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import { faker } from "@faker-js/faker";
import { repo } from "../RepoInstance";
import { avatars } from "../../__test__/avatar";
import { serializeBigInt } from "common";
import assert from "node:assert";

describe("POST /work/new", () => {
  it("create work", async () => {
    const profile = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const authorId = serializeBigInt(profile.id);
    const topicId = serializeBigInt(topic.id);
    await request(app)
      .post("/work/new")
      .attach("images[0][image]", avatars[0])
      .field("images[0][imagesPlaceholder]", "A")
      .field("title", title)
      .field("description", description)
      .field("content", content)
      .field("authorId", authorId)
      .field("topicIds[0]", topicId)
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const work = await repo.Work.selectWork(BigInt(res.body));
        assert.equal(work?.title, title);
        assert.equal(work?.description, description);
        assert.equal(work?.content, content);
        assert.equal(work?.author.id, authorId);
      });
  });
});
