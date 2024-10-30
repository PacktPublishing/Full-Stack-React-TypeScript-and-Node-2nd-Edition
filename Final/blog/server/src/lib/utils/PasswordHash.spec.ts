import { describe, it } from "node:test";
import assert from "node:assert";
import { createSalt, hashPassword, verifyPassword } from "./PasswordHash";
import { faker } from "@faker-js/faker";

describe("PasswordHash", () => {
  it("hashes password correctly", async () => {
    const salt = createSalt();

    const password = faker.internet.password();
    try {
      const storedPassword = await hashPassword(password, salt);

      const result = await verifyPassword(password, storedPassword, salt);
      assert.equal(result, true);
    } catch (e) {
      throw e;
    }
  });
});
