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

describe("GET /work/:id", () => {
  it("get work", async () => {
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
    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      profile.id,
      [topic.id],
      [
        {
          imagePlaceholder: "A",
          image: avatars[0],
        },
        {
          imagePlaceholder: "B",
          image: avatars[1],
        },
      ]
    );

    await request(app)
      .get(`/work/${work.id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const returnedWork: {
          id: bigint;
          title: string;
          description: string;
          content: string;
          author: {
            id: bigint;
            userName: string;
            fullName: string;
            description: string;
          };
        } = res.body;
        assert.equal(returnedWork?.title, title);
        assert.equal(returnedWork?.description, description);
        assert.equal(returnedWork?.content, content);
        assert.equal(returnedWork?.author.id, authorId);
      });
  });
});

describe("POST /work_popular", () => {
  it("get popular work by topic", async () => {
    const profile = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());

    for (let i = 0; i < 10; i++) {
      const title = faker.lorem.sentence(1);
      const description = faker.lorem.sentence(2);
      const content = faker.lorem.sentence(4);
      const authorId = serializeBigInt(profile.id);
      const work = await repo.Work.insertWork(
        title,
        description,
        content,
        profile.id,
        [topic.id],
        [
          {
            imagePlaceholder: "A",
            image: avatars[0],
          },
          {
            imagePlaceholder: "B",
            image: avatars[1],
          },
        ]
      );
      for (let y = 0; y < i; y++) {
        await repo.WorkLikes.insertWorkLike(work.id, profile.id);
      }
    }

    const firstFive = await repo.Work.selectMostPopularWorks(topic.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_popular")
      .send({
        topicId: serializeBigInt(topic.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const popularWorks: {
          id: bigint;
          updatedAt: Date;
          title: string;
          description: string;
          content: string;
          authorId: bigint;
          userName: string;
          fullName: string;
          workLikes: bigint[];
        }[] = res.body;
        assert.equal(
          popularWorks[0].workLikes.length >
            popularWorks[popularWorks.length - 1].workLikes.length,
          true
        );
      });
  });
});
