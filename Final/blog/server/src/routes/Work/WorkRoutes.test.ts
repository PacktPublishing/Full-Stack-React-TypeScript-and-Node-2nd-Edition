import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import { faker } from "@faker-js/faker";
import { repo } from "../RepoInstance";
import { avatars } from "../../__test__/avatar";
import { serializeBigInt } from "common";

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
    await request(app)
      .post("/work/new")
      .attach("images[0][image]", avatars[0])
      .field("images[0][imagesPlaceholder]", "A")
      .field("title", faker.lorem.sentence(1))
      .field("description", faker.lorem.sentence(2))
      .field("content", faker.lorem.sentence(4))
      .field("authorId", serializeBigInt(profile.id))
      .field("topicIds[0]", serializeBigInt(topic.id))
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        console.log(res.statusCode);
      });
  });
});
