import { describe, it } from "node:test";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { avatars } from "../../__test__/avatar";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import { serializeBigInt } from "lib";
import Api from "../../app";

describe("POST /work/new", () => {
  it("create work", async () => {
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
    const topic = await repo.Topic.insertTopic(faker.company.name());

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    await request(app)
      .post("/work/new")
      .attach("images", avatars[0], "image1.png")
      .attach("images", avatars[1], "image2.png")
      .field("imagesPlaceholders[0]", "A")
      .field("imagesPlaceholders[1]", "B")
      .field("title", title)
      .field("description", description)
      .field("content", content)
      .field("authorId", serializeBigInt(author.id).toString())
      .field("topicIds[0]", serializeBigInt(topic.id).toString())
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const work = await repo.Work.selectWork(BigInt(res.body));
        assert.equal(work?.title, title);
        assert.equal(work?.description, description);
        assert.equal(work?.content, content);
        assert.equal(work?.author.id, author.id.toString());
      });

    cleanup();
  });
});

describe("POST /work/update", () => {
  it("update work", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const profile = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    const topica = await repo.Topic.insertTopic(faker.company.name());
    const topicb = await repo.Topic.insertTopic(faker.company.name());

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const work = await request(app)
      .post("/work/new")
      .attach("images", avatars[0], "image1.png")
      .field("imagesPlaceholders[0]", "A")
      .field("title", title)
      .field("description", description)
      .field("content", content)
      .field("authorId", profile.id.toString())
      .field("topicIds[0]", topica.id.toString())
      .expect("Content-Type", /json/)
      .expect(200);
    const workId = BigInt(work.body);

    await request(app)
      .post("/work/update")
      .attach("images", avatars[1], "image2.png")
      .field("imagesPlaceholders[0]", "B")
      .field("workId", workId.toString())
      .field("title", title)
      .field("description", description)
      .field("content", content)
      .field("topicIds[0]", topicb.id.toString())
      .expect(204)
      .then(async () => {
        const comparisonWork = await repo.Work.selectWork(workId);
        assert.equal(comparisonWork?.title, title);
        assert.equal(comparisonWork?.description, description);
        assert.equal(comparisonWork?.content, content);
        assert.equal(comparisonWork?.author.id, profile.id);
        assert.equal(
          comparisonWork?.workTopics
            .map((wt) => wt.topic.id)
            .includes(topica.id),
          false
        );

        assert.equal(
          comparisonWork?.workTopics
            .map((wt) => wt.topic.id)
            .includes(topicb.id),
          true
        );
      });

    cleanup();
  });
});

describe("GET /work/:id", () => {
  it("get work", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
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
        assert.equal(returnedWork?.author.id, profile.id);
      });
    cleanup();
  });
});

describe("POST /work_popular", () => {
  it("get popular work by topic", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    for (let i = 0; i < 10; i++) {
      const title = faker.lorem.sentence(1);
      const description = faker.lorem.sentence(2);
      const content = faker.lorem.sentence(4);
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

    cleanup();
  });
});

describe("POST /work_latest", () => {
  it("get latest work", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

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

    for (let i = 0; i < 10; i++) {
      const title = faker.lorem.sentence(1);
      const description = faker.lorem.sentence(2);
      const content = faker.lorem.sentence(4);
      await repo.Work.insertWork(
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
    }

    const firstFive = await repo.Work.selectLatestWorksByAuthor(profile.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_latest")
      .send({
        id: serializeBigInt(profile.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (res) => {
        const latestWorks: {
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
          latestWorks[0].updatedAt >
            latestWorks[latestWorks.length - 1].updatedAt,
          true
        );
      });

    cleanup();
  });
});
