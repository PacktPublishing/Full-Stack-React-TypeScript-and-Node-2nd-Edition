import { describe, it } from "node:test";
import assert from "node:assert";
import request from "supertest";
import express, { Router } from "express";
import type { WorkImageItem } from "../../repository/work/WorkImage";
import { avatars } from "../../__test__/avatar";
import { faker } from "@faker-js/faker";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import { getWorkImage } from "../../controllers/work/WorkImageController";

describe("GET /work_image/:workId/:placeholder", () => {
  it("get work image", async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const { repo, cleanup } = await createClientAndTestDb();
    const router = Router();
    router.get("/work_image/:workId/:placeholder", (req, res, next) =>
      getWorkImage(req, res, next, repo)
    );
    app.use(router);

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
    const workImages: WorkImageItem[] = [];
    for (let i = 0; i < 2; i++) {
      workImages.push({
        imagePlaceholder: `${i}`,
        image: avatars[i],
      });
    }
    const work = await repo.Work.insertWork(
      faker.lorem.sentence(1),
      faker.lorem.sentence(3),
      faker.lorem.sentence(5),
      profile.id,
      [topic.id],
      workImages
    );

    await request(app)
      .get(`/work_image/${work.id}/0`)
      .expect("Content-Type", "application/octet-stream")
      .expect(200)
      .then((res) => {
        assert.deepStrictEqual(res.body, avatars[0]);
      });

    cleanup();
  });
});
