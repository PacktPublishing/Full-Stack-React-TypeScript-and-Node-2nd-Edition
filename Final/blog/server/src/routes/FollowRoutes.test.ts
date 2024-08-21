import { describe, it } from "node:test";
import request from "supertest";
import app from "../app";
import assert from "node:assert";

describe("POST /follow", () => {
  it("should create new follow object", async () => {
    await request(app)
      .post("/follow")
      .send({
        followedId: 1,
        followerId: 2,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });
  });
});
