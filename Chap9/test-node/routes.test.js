import { describe, it, after } from "node:test";
import assert from "node:assert";
import request from "supertest";
import app, { server } from "./app.js";

after(() => server.close());

describe("route tests", () => {
  it("get users", async () => {
    const res = await request(app)
      .get("/api/v1/users")
      .expect("Content-Type", /json/)
      .expect(200);

    assert.equal(res.body.length, 3);
  });

  it("insert new user", async () => {
    const res = await request(app)
      .post("/api/v1/newuser")
      .send({
        id: 4,
        username: "sam",
        age: 44,
      })
      .expect("Content-Type", /json/)
      .expect(200);

    assert.equal(res.body.id, 4);
  });
});
