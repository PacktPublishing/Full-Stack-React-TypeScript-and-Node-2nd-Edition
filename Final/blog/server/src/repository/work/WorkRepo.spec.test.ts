import { describe, it } from "node:test";
import assert from "node:assert";
import { Repository } from "../Repository.js";
import { faker } from "@faker-js/faker";
import { getAvatar } from "../../__test__/avatar.js";
import { SortOrder } from "../lib/utils.js";

const repo = new Repository();

describe("Work tests", () => {
  it("insertWork creates a new work", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    let avatar: Buffer | undefined = getAvatar();

    const author = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
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
      [BigInt(topic.id)]
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
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
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
      [BigInt(topic.id)]
    );

    const updateTitle = faker.lorem.sentence(5);
    const updateDesc = faker.lorem.sentence(10);
    const updateContent = faker.lorem.sentences(2);
    const updateTopic = await repo.Topic.insertTopic(faker.company.name());
    await repo.Work.updateWork(
      work.id,
      updateTitle,
      updateDesc,
      updateContent,
      [BigInt(topic.id), BigInt(updateTopic.id)]
    );
    const updatedWork = await repo.Work.selectWork(work.id);

    assert.equal(updatedWork?.title, updateTitle);
    assert.equal(updatedWork?.description, updateDesc);
    assert.equal(updatedWork?.content, updateContent);

    const workTopics = await repo.WorkTopic.selectWorkTopicsByWork(work.id);
    assert.equal(workTopics.length, 2);
    assert.equal(workTopics.filter((wt) => wt.topicId === topic.id)?.length, 1);
    assert.equal(
      workTopics.filter((wt) => wt.topicId === updateTopic.id)?.length,
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
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
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
      [BigInt(topic.id)],
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

    const userName = faker.internet.userName();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const author = await repo.Profile.insertProfile(
      userName,
      fullName,
      desc,
      faker.lorem.sentence(6),
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
      [BigInt(topic.id)]
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

    const userName = faker.internet.userName();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const author = await repo.Profile.insertProfile(
      userName,
      fullName,
      desc,
      faker.lorem.sentence(6),
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

    const userName = faker.internet.userName();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const author = await repo.Profile.insertProfile(
      userName,
      fullName,
      desc,
      faker.lorem.sentence(6),
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

    const userName = faker.internet.userName();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const author = await repo.Profile.insertProfile(
      userName,
      fullName,
      desc,
      faker.lorem.sentence(6),
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
});
