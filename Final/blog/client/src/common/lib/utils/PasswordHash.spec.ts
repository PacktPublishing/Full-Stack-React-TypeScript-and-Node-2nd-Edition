import { describe, expect, it } from "vitest";
import { createSalt, hashPassword, verifyPassword } from "./PasswordHash";
import { faker } from "@faker-js/faker";

describe("PasswordHash", () => {
  it("hashes password correctly", async () => {
    const salt = createSalt();

    const password = faker.internet.password();
    const storedPassword = await hashPassword(password, salt);
    expect(storedPassword).not.toBeInstanceOf(Error);

    const result = await verifyPassword(
      password,
      storedPassword as string,
      salt
    );
    expect(result).toBe(true);
  });
});
