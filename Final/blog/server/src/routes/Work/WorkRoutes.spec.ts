import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import { faker } from "@faker-js/faker";
import { repo } from "../RepoInstance";
import { avatars, getAvatar } from "../../__test__/avatar";
import { serializeBigInt } from "common";
import assert from "node:assert";
import { octetType } from "../../controllers/lib/Constants";
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
    const userName = getRandomizedUserName();
    const password = faker.internet.password();
    const profile = await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .field("userName", userName)
      .field("password", password)
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(2))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(200);
    const authorId = profile.body;

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { _userId, accessToken } = loginResponse.body;

    const topicResp = await request(app)
      .post("/topic/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        name: faker.company.name(),
      })
      .expect("Content-Type", /json/)
      .expect(200);
    const topicId = topicResp.body;

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    await request(app)
      .post("/work/new")
      .auth(accessToken, { type: "bearer" })
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

describe("POST /work/update", () => {
  it("update work", async () => {
    const userName = getRandomizedUserName();
    const password = faker.internet.password();
    const profile = await request(app)
      .post("/profile/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .field("userName", userName)
      .field("password", password)
      .field("fullName", faker.internet.displayName())
      .field("description", faker.lorem.sentence(2))
      .field("socialLinkPrimary", faker.internet.url())
      .field("socialLinkSecondary", faker.internet.url())
      .expect(200);
    const authorId = profile.body;

    const loginResponse = await request(app)
      .post("/profile/login")
      .send({
        userName,
        password,
      })
      .expect(200);
    const { _userId, accessToken } = loginResponse.body;

    const topicaResp = await request(app)
      .post("/topic/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        name: faker.company.name(),
      })
      .expect("Content-Type", /json/)
      .expect(200);
    const topicaId = topicaResp.body;
    const topicbResp = await request(app)
      .post("/topic/new")
      .auth(accessToken, { type: "bearer" })
      .send({
        name: faker.company.name(),
      })
      .expect("Content-Type", /json/)
      .expect(200);
    const topicbId = topicbResp.body;

    const title = faker.lorem.sentence(1);
    const description = faker.lorem.sentence(2);
    const content = faker.lorem.sentence(4);
    const work = await request(app)
      .post("/work/new")
      .auth(accessToken, { type: "bearer" })
      .attach("images[0][image]", avatars[0])
      .field("images[0][imagesPlaceholder]", "A")
      .field("title", title)
      .field("description", description)
      .field("content", content)
      .field("authorId", authorId)
      .field("topicIds[0]", topicaId)
      .expect("Content-Type", /json/)
      .expect(200);
    const workId = work.body;

    await request(app)
      .post("/work/update")
      .auth(accessToken, { type: "bearer" })
      .attach("images[0][image]", avatars[1])
      .field("images[0][imagesPlaceholder]", "B")
      .field("workId", serializeBigInt(workId))
      .field("title", title)
      .field("description", description)
      .field("content", content)
      .field("topicIds[0]", topicbId)
      .expect(204)
      .then(async () => {
        const comparisonWork = await repo.Work.selectWork(workId);
        assert.equal(comparisonWork?.title, title);
        assert.equal(comparisonWork?.description, description);
        assert.equal(comparisonWork?.content, content);
        assert.equal(comparisonWork?.author.id, authorId);
        assert.equal(
          comparisonWork?.workTopics
            .map((wt) => serializeBigInt(wt.topic.id))
            .includes(topicaId),
          false
        );

        assert.equal(
          comparisonWork?.workTopics
            .map((wt) => serializeBigInt(wt.topic.id))
            .includes(topicbId),
          true
        );
      });
  });
});

describe("GET /work/:id", () => {
  it("get work", async () => {
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
  });
});

describe("POST /work_latest", () => {
  it("get latest work", async () => {
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
      //.expect("Content-Type", /json/)
      //.expect(200)
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
  });
});

describe("POST /work_followed", () => {
  it("get followed works", async () => {
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
  });
});

describe("POST /work_followed_one", () => {
  it("get one followed profile's works", async () => {
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
  });
});

describe("POST /work_topic", () => {
  it("selectWorksByTopic, gets works by topic", async () => {
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
  });
});

describe("POST /work_search", () => {
  it("searchWorks, gets works by search text", async () => {
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
  });
});
