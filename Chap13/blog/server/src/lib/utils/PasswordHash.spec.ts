import "../../test-setup";
import { describe, it } from "node:test";
import assert from "node:assert";
import { hashPassword, verifyPassword } from "./PasswordHash";
import { faker } from "@faker-js/faker";

describe("PasswordHash", () => {
  it("hashes password correctly", async () => {
    const password = faker.internet.password();
    try {
      const storedPassword = await hashPassword(password);

      const result = await verifyPassword(password, storedPassword);

      assert.equal(result, true);
    } catch (e) {
      throw e;
    }
  });
});
