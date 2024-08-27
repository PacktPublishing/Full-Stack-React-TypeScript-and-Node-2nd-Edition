import { describe, it } from "node:test";
import request from "supertest";
import app from "../../app";
import { avatars, getAvatar } from "../../__test__/avatar";
import { octetType } from "../../controllers/lib/Constants";
import { repo } from "../RepoInstance";
import assert from "node:assert";

describe("POST /profile/avatar/new", () => {
  it("create profile avatar", async () => {
    await request(app)
      .post("/profile/avatar/new")
      .attach("file", getAvatar(), {
        filename: "test.jpg",
        contentType: octetType,
      })
      .expect(200)
      .then((res) => {
        assert.equal(res.statusCode, 200);
      });
  });
});

describe("GET /profile/avatar/:avatarId", () => {
  it("get profile avatar", async () => {
    const avatar = await repo.ProfileAvatar.insertProfileAvatar(avatars[0]);

    await request(app)
      .get(`/profile/avatar/${avatar.id}`)
      .expect(200)
      .expect("Content-Type", "application/octet-stream")
      .then((res) => {
        assert.deepStrictEqual(res.body, Buffer.from(avatar.avatar));
      });
  });
});
