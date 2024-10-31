import { faker } from "@faker-js/faker";
import { describe, it } from "node:test";
import { getAvatar } from "../../__test__/avatar.js";
import { Repository } from "../Repository.js";
import assert from "node:assert";
import { Profile, Work } from "@prisma/client";
import { SortOrder } from "../lib/Constants.js";
import { getRandomizedUserName } from "../../__test__/lib/TestData.js";

const repo = new Repository();

describe("Repository Profile", () => {
  it("Create a profile and login successfully with it", async () => {
    const avatar: Buffer | undefined = getAvatar();
    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const primaryUrl = faker.internet.url();
    const secondaryUrl = faker.internet.url();

    await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      desc,
      primaryUrl,
      secondaryUrl,
      avatar
    );

    const loginResult = await repo.Profile.login(userName, password);
    assert.equal(loginResult.status, true);
    assert.equal(loginResult.profileId != undefined, true);
  });

  it("Create a profile and confirm its fields", async () => {
    const avatar: Buffer | undefined = getAvatar();
    const userName = faker.internet.username();
    const password = faker.internet.password();
    const fullName = faker.internet.displayName();
    const desc = faker.lorem.sentence(5);
    const primaryUrl = faker.internet.url();
    const secondaryUrl = faker.internet.url();

    const profile = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      desc,
      primaryUrl,
      secondaryUrl,
      avatar
    );
    const author = await repo.Profile.selectProfile(profile.id);

    assert.equal(author?.userName, userName);
    assert.equal(author?.fullName, fullName);
    assert.equal(author?.description, desc);
    assert.equal(author?.socialLinkPrimary, primaryUrl);
    assert.equal(author?.socialLinkSecondary, secondaryUrl);
    assert.notEqual(author?.avatarId, null);
  });

  it("Create 10 Profiles with likes", async () => {
    const count = 10;
    const authors: { id: bigint }[] = new Array(count);
    const works: Work[] = new Array(count);

    for (let i = 0; i < count; i++) {
      authors[i] = await repo.Profile.insertProfile(
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.displayName(),
        faker.lorem.sentence(5),
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

    assert.equal(popAuthors.length >= count, true); // because other tests might also be creating works by any author
  });

  it("Create Profile; Update Profile; and confirm its updated fields", async () => {
    let avatar: Buffer | undefined = getAvatar();
    let userName = faker.internet.username();
    let password = faker.internet.password();
    let fullName = faker.internet.displayName();
    let desc = faker.lorem.sentence(5);
    let primaryUrl = faker.internet.url();
    let secondaryUrl = faker.internet.url();

    let createdAuthor = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      desc,
      primaryUrl,
      secondaryUrl,
      avatar
    );

    avatar = getAvatar();
    password = faker.internet.password();
    fullName = faker.internet.displayName();
    desc = faker.lorem.sentence(5);
    primaryUrl = faker.internet.url();
    secondaryUrl = faker.internet.url();
    await repo.Profile.updateProfile(
      createdAuthor.id,
      fullName,
      password,
      desc,
      primaryUrl,
      secondaryUrl,
      avatar
    );
    let updatedAuthor = await repo.Profile.selectProfile(createdAuthor.id);

    assert.equal(updatedAuthor?.userName, userName);
    assert.equal(updatedAuthor?.fullName, fullName);
    assert.equal(updatedAuthor?.description, desc);
    assert.equal(updatedAuthor?.socialLinkPrimary, primaryUrl);
    assert.equal(updatedAuthor?.socialLinkSecondary, secondaryUrl);
    assert.notEqual(updatedAuthor?.avatarId, null);
  });

  it("Create Profile; get it back; and confirm its avatar", async () => {
    const avatar = getAvatar();
    const profile = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      avatar
    );

    const selectedProfile = await repo.Profile.selectProfile(profile.id);

    const avatarResult = await repo.ProfileAvatar.selectProfileAvatar(
      selectedProfile?.avatarId!
    );

    assert.equal(avatarResult?.avatar.byteLength, avatar.byteLength);
  });
});
