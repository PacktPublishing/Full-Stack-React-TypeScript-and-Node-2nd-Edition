import { describe, it } from "node:test";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { avatars } from "../../__test__/avatar";
import assert from "node:assert";
import { createClientAndTestDb } from "../../__test__/lib/DbTestUtils";
import app from "../../app";
import router from "./WorkRoutes";

describe("GET /work/:id", () => {
  it("get work", async () => {
    const { repo, cleanup } = await createClientAndTestDb();
    app.use((req, _res, next) => {
      req.repo = repo;
      next();
    });
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
