import { scrypt, randomBytes, timingSafeEqual } from "node:crypto";
import dotenv from "dotenv";

dotenv.config();

export function createSalt() {
  return randomBytes(32).toString("hex");
}

export function getEnvSalt() {
  if (!process.env.PASSWORDHASH_SALT)
    throw new Error("PASSWORDHASH_SALT not found! Cannot create password hash");

  return process.env.PASSWORDHASH_SALT;
}

export async function hashPassword(
  password: string,
  salt: string
): Promise<string> {
  return new Promise((res, rej) => {
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) throw err;

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

    return timingSafeEqual(
      Buffer.from(storedPassword),
      Buffer.from(hashedPassword)
    );
  } catch (e) {
    throw new Error("Password verification failed");
  }
}
