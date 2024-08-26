import { describe, it } from "node:test";
import request from "supertest";
import app from "../app";
import assert from "node:assert";

describe("POST /follow", () => {
  it("should return status code 200", async () => {
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

// describe("POST /follow/followers", () => {
//   it("should return list of followers", async () => {
//     await request(app)
//       .post("/follow/followers")
//       .send({
//         profileId: 1,
//         pageSize: 10,
//       })
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .then((res) => {
//         assert.equal(res.statusCode, 200);
//       });
//   });
// });

// describe("POST /follow/followed", () => {
//   it("should return list of followed", async () => {
//     await request(app)
//       .get("/follow/followed/2")
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .then((res) => {
//         assert.equal(res.statusCode, 200);
//       });
//   });
// });
