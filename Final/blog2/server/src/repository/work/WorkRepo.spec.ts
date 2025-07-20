import { describe, it } from "node:test";
import assert from "node:assert";
import { Repository } from "../Repository.js";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar.js";
import { SortOrder } from "../lib/Constants.js";

const repo = new Repository();

describe("Work tests", () => {
  it("insertWork creates a new work", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );

    const topic = await repo.Topic.insertTopic(faker.company.name());

    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topic.id]
    );

    const workTopics = await repo.WorkTopic.selectWorkTopicsByWork(work.id);

    assert.equal(work.title, title);
    assert.equal(work.description, description);
    assert.equal(work.content, content);
    assert.equal(work.authorId, author.id);
    assert.equal(workTopics[0].workId, work.id);
    assert.equal(workTopics[0].topicId, topic.id);
  });

  it("updateWork updates an existing work", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );

    const topica = await repo.Topic.insertTopic(faker.company.name());
    const topicb = await repo.Topic.insertTopic(faker.company.name());

    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topica.id] // work created with topica
    );

    const updateTitle = faker.lorem.sentence(5);
    const updateDesc = faker.lorem.sentence(10);
    const updateContent = faker.lorem.sentences(2);
    await repo.Work.updateWork(
      work.id,
      updateTitle,
      updateDesc,
      updateContent,
      [topicb.id] // work updated where topica is removed and topicb is added
    );
    const updatedWork = await repo.Work.selectWork(work.id);

    assert.equal(updatedWork?.title, updateTitle);
    assert.equal(updatedWork?.description, updateDesc);
    assert.equal(updatedWork?.content, updateContent);

    const workTopics = await repo.WorkTopic.selectWorkTopicsByWork(work.id);
    assert.equal(workTopics.length, 1);
    assert.equal(
      workTopics.filter((wt) => wt.topicId === topica.id)?.length,
      0
    );
    assert.equal(
      workTopics.filter((wt) => wt.topicId === topicb.id)?.length,
      1
    );
  });

  it("insertWork creates a new work with one image", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();
    let image: Buffer | undefined = getAvatar();

    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );

    const topic = await repo.Topic.insertTopic(faker.company.name());

    const imagePlaceholder = "main";
    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topic.id],
      [
        {
          imagePlaceholder: imagePlaceholder,
          image,
        },
      ]
    );

    const workImage = await repo.WorkImage.selectWorkImage(
      work.id,
      imagePlaceholder
    );

    assert.equal(work.title, title);
    assert.equal(work.description, description);
    assert.equal(work.content, content);
    assert.equal(work.authorId, author.id);
    assert.equal(workImage?.workId, work.id);
    assert.equal(workImage?.image.byteLength, image.byteLength);
    assert.equal(workImage?.imagePlaceholder, imagePlaceholder);
  });

  it("selectWork, gets work with author and correct likes", async () => {
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
    const newWork = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topic.id]
    );
    await repo.WorkLikes.insertWorkLike(newWork.id, author.id);

    const work = await repo.Work.selectWork(newWork.id);
    assert.equal(work?.author.userName, userName);
    assert.equal(work?.author.fullName, fullName);
    assert.equal(work?.author.description, desc);
    assert.equal(work?.workLikes.length, 1);
  });

  it("selectMostPopularWorks, gets all works by most likes", async () => {
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

    // create data
    let likeCount = 10;
    for (let i = 0; i < 10; i++) {
      const newWork = await repo.Work.insertWork(
        title,
        description,
        content,
        author.id,
        []
      );

      for (let y = 0; y < likeCount; y++) {
        await repo.WorkLikes.insertWorkLike(newWork.id, author.id);
      }
      likeCount -= 1;
    }

    const works = await repo.Work.selectMostPopularWorks(undefined, 10);

    // do raw query and compare
    const rawWorks = await repo.Client.work.findMany({
      orderBy: {
        workLikes: {
          _count: SortOrder.Desc,
        },
      },
      take: 10,
    });

    assert.equal(works.length, 10);
    assert.equal(works.length, rawWorks.length);
  });

  it("selectMostPopularWorks, gets works with most likes by topic", async () => {
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

    const topics = new Array(10);
    for (let i = 0; i < 10; i++) {
      topics[i] = await repo.Topic.insertTopic(faker.company.name());
    }
    const usedTopicIds: Set<bigint> = new Set();

    // create data
    let likeCount = 10;
    const newWork = new Array(10);
    for (let i = 0; i < 10; i++) {
      let topicId = Math.round(Math.random() * 10);
      topicId = topicId > 9 ? 0 : topicId;
      usedTopicIds.add(topics[topicId].id);

      newWork[i] = await repo.Work.insertWork(
        title,
        description,
        content,
        author.id,
        [topics[topicId].id]
      );

      for (let y = 0; y < likeCount; y++) {
        await repo.WorkLikes.insertWorkLike(newWork[i].id, author.id);
      }
      likeCount -= 1;
    }

    const testingTopicId = Array.from(usedTopicIds)[0];
    const works = await repo.Work.selectMostPopularWorks(testingTopicId, 10);

    assert.equal(
      works[0].workLikes.length >= works[works.length - 1].workLikes.length,
      true
    );
    assert.equal(
      works.every((w) => w.workTopics.every((wt) => wt.id === testingTopicId)),
      true
    );
  });

  it("selectLatestWorksByAuthor, gets works by author desc", async () => {
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

    for (let i = 0; i < 10; i++) {
      const newWork = await repo.Work.insertWork(
        title,
        description,
        content,
        author.id,
        []
      );
    }

    let works = await repo.Work.selectLatestWorksByAuthor(author.id, 5);
    assert.equal(works.length, 5);
    assert.equal(works[0].updatedAt > works[4].updatedAt, true);

    works = await repo.Work.selectLatestWorksByAuthor(
      author.id,
      -5,
      works[works.length - 1].id
    );
    assert.equal(works.length, 4); // because query skips one when using cursor
    assert.equal(works[0].updatedAt > works[3].updatedAt, true);
  });

  it("selectWorksOfFollowed, gets works by follower's followed users desc", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
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
        faker.lorem.sentence(5),
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
    const nextFive = await repo.Work.selectWorksOfFollowed(
      follower.id,
      5,
      lastCursor
    );
    const reversedWorkIds = followedWorkIds.reverse();
    assert.equal(nextFive[0].id, reversedWorkIds[5]);
    assert.equal(nextFive[nextFive.length - 1].id, reversedWorkIds[9]);
  });

  it("selectWorksOfOneFollowed, gets works of followed profile", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
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
      faker.lorem.sentence(5),
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
    const nextFive = await repo.Work.selectWorksOfOneFollowed(
      followed.id,
      5,
      lastCursor
    );
    const reversedWorkIds = followedWorkIds.reverse();
    assert.equal(nextFive[0].id, reversedWorkIds[5]);
    assert.equal(nextFive[nextFive.length - 1].id, reversedWorkIds[9]);
  });

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
    const topicWorkIds = [];
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

    const nextFive = await repo.Work.selectWorksByTopic(
      topic.id,
      5,
      workIdCursor
    );
    const reversedTopicWorkIds = topicWorkIds.reverse();
    assert.equal(reversedTopicWorkIds.includes(nextFive[0].id), true);
  });

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

    const searchedWorks = await repo.Work.searchWorks(title, 5);
    assert.equal(searchedWorks.length, 3);
    assert.equal(searchedWorks[0].title, title);
    assert.equal(searchedWorks[0].description, title + description);
  });
});
