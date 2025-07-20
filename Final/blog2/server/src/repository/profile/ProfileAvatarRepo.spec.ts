import { describe, it } from "node:test";
import { avatars } from "../../__test__/avatar";
import { repo } from "../../routes/RepoInstance";
import assert from "node:assert";

describe("Repository Profile Avatar", () => {
  it("Create avatar using insertProfileAvatar and retrieve it again using selectProfileAvatar", async () => {
    const avatar = await repo.ProfileAvatar.insertProfileAvatar(avatars[0]);

    const selectedAvatar = await repo.ProfileAvatar.selectProfileAvatar(
      avatar.id
    );

    assert.equal(selectedAvatar?.id, avatar.id);
  });
});
