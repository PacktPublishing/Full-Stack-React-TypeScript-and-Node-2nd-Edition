import { describe, it } from "node:test";
import { repo } from "../../routes/RepoInstance";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { avatars, getAvatar } from "../../__test__/avatar";
import { Repository } from "../Repository";
import { WorkImageItem } from "./WorkImage";

describe("Repository WorkImage", () => {
  it("Create WorkImage and verify it", async () => {
    const title = faker.lorem.sentence(6);
    const description = faker.lorem.sentence(10);
    const content = faker.lorem.sentences(2);
    const author = await repo.Profile.insertProfile(
      faker.internet.username(),
      faker.internet.password(),
      faker.internet.displayName(),
      faker.lorem.sentence(5),
      faker.internet.url(),
      faker.internet.url(),
      getAvatar()
    );
    const topic = await repo.Topic.insertTopic(faker.company.name());
    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      [topic.id]
    );
    const createdWorkImages = [];
    let i = 0;
    await repo.Client.$transaction(async (tx) => {
      const workImageItems: WorkImageItem[] = avatars.map((a) => {
        i += 1;
        return {
          imagePlaceholder: `Item ${i}`,
          image: a,
        };
      });

      createdWorkImages.push(
        await repo.WorkImage.insertWorkImages(workImageItems, work.id, tx)
      );
    });

    for (let y = 0; y < i; y++) {
      const selectedWorkImage = await repo.WorkImage.selectWorkImage(
        work.id,
        `Item ${y + 1}`
      );
      assert.equal(selectedWorkImage?.imagePlaceholder, `Item ${y + 1}`);
    }
  });
});
