import { scrypt, randomBytes, timingSafeEqual } from "node:crypto";

export function createSalt() {
  return randomBytes(32).toString("hex");
}

export async function hashPassword(
  password: string,
  salt: string
): Promise<Error | string> {
  return new Promise((res, rej) => {
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) rej(err);

      res(derivedKey.toString("hex"));
    });
  });
}

export async function verifyPassword(
  password: string,
  storedPassword: string,
  salt: string
) {
  try {
    const hashedPassword = await hashPassword(password, salt);
    if (hashedPassword instanceof Error)
      throw new Error("Password verification failed");

    return timingSafeEqual(
      Buffer.from(storedPassword),
      Buffer.from(hashedPassword)
    );
  } catch (e) {
    throw new Error("Password verification failed");
  }
}
