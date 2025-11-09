import { describe, it } from "node:test";
import { faker } from "@faker-js/faker";
import assert from "node:assert";
import { avatars, getAvatar } from "../../__test__/avatar";
import { type WorkImageItem } from "./WorkImage";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";

describe("Repository WorkImage", () => {
  it("Create WorkImage and verify it", async () => {
    const { repo, cleanup } = await createClientAndTestDb();

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

    const work = await repo.Work.insertWork(
      title,
      description,
      content,
      author.id,
      []
    );

    const workImageItems: WorkImageItem[] = avatars.map((a, i) => {
      return {
        imagePlaceholder: `Item ${i}`,
        image: a,
      };
    });
    await repo.Client.$transaction(async (tx) => {
      await repo.WorkImage.insertWorkImages(workImageItems, work.id, tx);
    });

    for (let i = 0; i < workImageItems.length; i++) {
      const placeholder = `Item ${i}`;
      const selectedWorkImage = await repo.WorkImage.selectWorkImage(
        work.id,
        placeholder
      );
      assert.equal(selectedWorkImage?.imagePlaceholder, placeholder);
    }

    cleanup();
  });
});
