import { describe, it } from "node:test";
import app from "../../app";
import request from "supertest";
import { repo } from "../RepoInstance";
import { faker } from "@faker-js/faker";
import { avatars } from "../../__test__/avatar";
import { WorkImageItem } from "../../repository/work/WorkImage";
import { serializeBigInt } from "common";
import assert from "node:assert";

describe("POST /work_like/new", () => {
  it("create work like", async () => {
    const profile = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const workImages: WorkImageItem[] = [];
    const work = await repo.Work.insertWork(
      faker.lorem.sentence(1),
      faker.lorem.sentence(3),
      faker.lorem.sentence(5),
      profile.id,
      [topic.id],
      workImages
    );

    await request(app)
      .post("/work_like/new")
      .send({
        workId: serializeBigInt(work.id),
        likerId: serializeBigInt(profile.id),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const workLikes = await repo.WorkLikes.selectWorkLikesCount(work.id);
        assert.equal(workLikes > 0, true);
      });
  });
});
