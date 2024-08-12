import { faker } from "@faker-js/faker";
import { describe, it } from "node:test";
import { getAvatar } from "../../__test__/avatar.js";
import { Repository } from "../Repository.js";
import assert from "node:assert";
import { Profile, Work } from "@prisma/client";
import { SortOrder } from "../lib/utils.js";

const repo = new Repository();

describe("ProfileRepo calls", () => {
  it("insertProfile creates a new profile", async () => {
    let avatar: Buffer | undefined = getAvatar();
    let userName = faker.internet.userName();
    let fullName = faker.internet.displayName();
    let desc = faker.lorem.sentence(5);
    let ownerAddress = faker.lorem.sentence(6);
    let primaryUrl = faker.internet.url();
    let secondaryUrl = faker.internet.url();

    const author = await repo.Profile.insertProfile(
      userName,
      fullName,
      desc,
      ownerAddress,
      primaryUrl,
      secondaryUrl,
      avatar
    );

    assert.equal(author.userName, userName);
    assert.equal(author.fullName, fullName);
    assert.equal(author.description, desc);
    assert.equal(author.ownerAddress, ownerAddress);
    assert.equal(author.socialLinkPrimary, primaryUrl);
    assert.equal(author.socialLinkSecondary, secondaryUrl);
    assert.notEqual(author.avatarId, null);
  });

  it("selectMostPopularAuthors() gives 10 profiles with descending work likes", async () => {
    const count = 10;
    const authors: Profile[] = new Array(count);
    const works: Work[] = new Array(count);

    for (let i = 0; i < count; i++) {
      authors[i] = await repo.Profile.insertProfile(
        faker.internet.userName(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
        faker.lorem.sentence(6),
        faker.internet.url(),
        faker.internet.url(),
        getAvatar()
      );

      const title = faker.lorem.sentence(6);
      const description = faker.lorem.sentence(10);
      const content = faker.lorem.sentences(2);
      works[i] = await repo.Work.insertWork(
        title,
        description,
        content,
        authors[i].id,
        []
      );
    }

    let start = new Date();
    let likesToInsert = 10;
    for (let i = 0; i < count; i++) {
      for (let l = 0; l < likesToInsert; l++) {
        await repo.WorkLikes.insertWorkLike(
          works[i].id,
          authors[i + 1 >= count - 1 ? 0 : i + 1].id
        );
      }

      likesToInsert -= 1;
    }

    const popAuthors = await repo.Profile.selectMostPopularAuthors(count);
    const rawPopAuthors = (
      await repo.Client.work.findMany({
        select: {
          author: true,
        },
        orderBy: {
          workLikes: {
            _count: SortOrder.Desc,
          },
        },
        take: count,
      })
    ).map((a) => a.author);

    assert.equal(popAuthors.length, count);
    assert.equal(popAuthors.length, rawPopAuthors.length);
    assert.equal(popAuthors[0].id, rawPopAuthors[0].id);
    assert.equal(popAuthors[9].id, rawPopAuthors[9].id);
  });

  it("selectProfileAvatar returns one avatar image", async () => {
    const avatar = getAvatar();
    const profile = await repo.Profile.insertProfile(
      faker.internet.userName(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.lorem.sentence(6),
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );

    const avatarResult = await repo.ProfileAvatar.selectProfileAvatar(
      profile.avatarId!
    );

    assert.equal(avatarResult?.avatar.byteLength, avatar.byteLength);
  });
});
