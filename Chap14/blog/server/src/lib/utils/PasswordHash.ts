import { scrypt, timingSafeEqual } from "node:crypto";

function getEnvSalt() {
  if (!process.env.PASSWORDHASH_SALT) {
    throw new Error("PASSWORDHASH_SALT not set!");
  }

  return process.env.PASSWORDHASH_SALT;
}
const PASSWORDHASH_SALT = getEnvSalt();

export async function hashPassword(password: string): Promise<string> {
  return new Promise((res) => {
    scrypt(password, PASSWORDHASH_SALT, 64, (err, derivedKey) => {
      if (err) throw err;

      res(derivedKey.toString("hex"));
    });
  });
}

export async function verifyPassword(password: string, storedPassword: string) {
  try {
    const hashedPassword = await hashPassword(password);

    return timingSafeEqual(
      Buffer.from(storedPassword),
      Buffer.from(hashedPassword)
    );
  } catch (e) {
    throw new Error("Password verification failed");
  }
}
