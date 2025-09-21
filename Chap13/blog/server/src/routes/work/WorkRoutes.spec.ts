import { describe, it } from "node:test";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { avatars, getAvatar } from "../../__test__/avatar";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import { serializeBigInt } from "lib";
import Api from "../../app";
import { getRandomizedUserName } from "../../__test__/lib/TestData";

type TestWorkModel = {
  id: bigint;
  updatedAt: Date;
  title: string;
  description: string;
  content: string;
  authorId: bigint;
  userName: string;
  fullName: string;
  authorDesc: string | null;
};

describe("POST /work/new", () => {
  it("create work", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;
    const agent = request.agent(app);

    const userName = getRandomizedUserName();
    const password = faker.internet.password();

    const author = await repo.Profile.insertProfile(
      userName,
      password,
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());

    await agent
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    await agent
      .post("/work/new")
      .attach("images", avatars[0], "image1.png")
      .attach("images", avatars[1], "image2.png")
      .field("imagesPlaceholders[0]", "A")
      .field("imagesPlaceholders[1]", "B")
      .field("title", title)
      .field("description", description)
      .field("content", content)
      .field("authorId", author.id.toString())
      .field("topicIds[0]", topic.id.toString())
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
    const agent = request.agent(app);

    const userName = faker.internet.username();
    const password = faker.internet.password();
    const profile = await repo.Profile.insertProfile(
      userName,
      password,
      faker.internet.displayName(),
      faker.lorem.sentence(2),
      faker.internet.url(),
      faker.internet.url(),
      avatars[0]
    );

    const topica = await repo.Topic.insertTopic(faker.company.name());
    const topicb = await repo.Topic.insertTopic(faker.company.name());

    await agent
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const work = await agent
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

    await agent
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

describe("POST /work_followed", () => {
  it("get followed works", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(3);
    const follower = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      desc,
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );

    const followedCount = 10;
    const followedWorkIds: bigint[] = [];
    for (let i = 0; i < followedCount; i++) {
      const followed = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(3),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );
      await repo.Follow.insertFollow(followed.id, follower.id);

      for (let i = 0; i < 5; i++) {
        const followedWork = await repo.Work.insertWork(
          title,
          description,
          content,
          followed.id,
          []
        );
        followedWorkIds.push(followedWork.id);
      }
    }

    const firstFive = await repo.Work.selectWorksOfFollowed(follower.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_followed")
      .send({
        id: serializeBigInt(follower.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        const response: TestWorkModel[] = res.body;
        const reversedWorkIds = followedWorkIds.reverse();
        assert.equal(response[0].id, reversedWorkIds[5]);
      });
    cleanup();
  });
});

describe("POST /work_followed_one", () => {
  it("get one followed profile's works", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(3);
    const follower = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      desc,
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );

    const followedWorkIds: bigint[] = [];
    const followed = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(3),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    await repo.Follow.insertFollow(followed.id, follower.id);

    for (let i = 0; i < 10; i++) {
      const followedWork = await repo.Work.insertWork(
        title,
        description,
        content,
        followed.id,
        []
      );
      followedWorkIds.push(followedWork.id);
    }

    const firstFive = await repo.Work.selectWorksOfOneFollowed(followed.id, 5);
    const lastCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_followed_one")
      .send({
        id: serializeBigInt(followed.id),
        pageSize: 5,
        lastCursor: serializeBigInt(lastCursor),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        const response: TestWorkModel[] = res.body;
        const reversedWorkIds = followedWorkIds.reverse();
        assert.equal(response[0].id, reversedWorkIds[5]);
      });
    cleanup();
  });
});

describe("POST /work_topic", () => {
  it("selectWorksByTopic, gets works by topic", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const author = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      desc,
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const topicWorkIds: bigint[] = [];
    for (let i = 0; i < 10; i++) {
      topicWorkIds.push(
        (
          await repo.Work.insertWork(title, description, content, author.id, [
            topic.id,
          ])
        ).id
      );
    }

    const firstFive = await repo.Work.selectWorksByTopic(topic.id, 5);
    const workIdCursor = firstFive[firstFive.length - 1].id;

    await request(app)
      .post("/work_topic")
      .send({
        id: serializeBigInt(topic.id),
        pageSize: 5,
        lastCursor: serializeBigInt(workIdCursor),
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        const nextFive: TestWorkModel[] = res.body;
        const reversedTopicWorkIds = topicWorkIds.reverse();
        assert.equal(nextFive[0].id, reversedTopicWorkIds[5]);
        assert.equal(nextFive[4].id, reversedTopicWorkIds[9]);
      });
    cleanup();
  });
});

describe("POST /work_search", () => {
  it("searchWorks, gets works by search text", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    const app = new Api(repo).App;

    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const author = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      desc,
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const topicWorkIds = [];
    // create exactly 3 works with same title and description and confirm
    // when searched only those 3 come back
    for (let i = 0; i < 3; i++) {
      topicWorkIds.push(
        (
          await repo.Work.insertWork(
            title,
            title + description,
            content,
            author.id,
            [topic.id]
          )
        ).id
      );
    }
    for (let i = 0; i < 7; i++) {
      topicWorkIds.push(
        (
          await repo.Work.insertWork(
            faker.lorem.sentence(1),
            faker.lorem.sentence(2),
            faker.lorem.sentence(3),
            author.id,
            [topic.id]
          )
        ).id
      );
    }

    await request(app)
      .post("/work_search")
      .send({
        searchTxt: title,
        pageSize: 5,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        const searchedWorks: TestWorkModel[] = res.body;
        assert.equal(searchedWorks.length, 3);
        assert.equal(searchedWorks[0].title, title);
        assert.equal(searchedWorks[0].description, title + description);
      });
    cleanup();
  });
});
