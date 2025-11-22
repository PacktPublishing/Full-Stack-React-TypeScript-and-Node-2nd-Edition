import { describe, it } from "node:test";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { avatars } from "../../__test__/avatar";
import { serializeBigInt } from "lib";
import assert from "node:assert";
import { getRandomizedUserName } from "../../__test__/lib/TestData";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import Api from "../../app";

describe("POST /work_like/new", () => {
  it("create work like", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();

    const liker = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
      avatars[0]
    );

    const topic = await repo.Topic.insertTopic(faker.company.name());

    const title = faker.lorem.sentence(1);
    const workDesc = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const work = await repo.Work.insertWork(
      title,
      workDesc,
      content,
      author.id,
      [topic.id]
    );

    await request(app)
      .post("/work_like/new")
      .send({
        workId: serializeBigInt(work.id),
        likerId: serializeBigInt(liker.id),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async () => {
        const workLikes = await repo.WorkLikes.selectWorkLikesCount(work.id);
        assert.equal(workLikes > 0, true);
      });

    cleanup();
  });
});

describe("POST /work_like/:workId", () => {
  it("get work like", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    const userName = getRandomizedUserName();
    const fullName = faker.internet.displayName();
    const password = faker.internet.password();
    const description = faker.lorem.sentence(3);
    const socialLinkPrimary = faker.internet.url();
    const socialLinkSecondary = faker.internet.url();

    const liker = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
      avatars[0]
    );

    const topic = await repo.Topic.insertTopic(faker.company.name());

    const title = faker.lorem.sentence(1);
    const workDesc = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const work = await repo.Work.insertWork(
      title,
      workDesc,
      content,
      author.id,
      [topic.id]
    );

    await request(app)
      .post("/work_like/new")
      .send({
        workId: serializeBigInt(work.id),
        likerId: serializeBigInt(liker.id),
      })
      .expect(200);

    await request(app)
      .get(`/work_like/${work.id}`)
      .expect(200)
      .then((res) => {
        assert.equal(res.body == 1, true);
      });

    cleanup();
  });
});
