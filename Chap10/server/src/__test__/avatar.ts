import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const avatarsPath = join(__dirname, "/avatars");
export function getAvatar() {
  const filePath = join(__dirname, "/avatars/longhair.jpg");
  return readFileSync(filePath);
}

const avatarFilePaths = readdirSync(avatarsPath);
export const avatars: Buffer[] = new Array(avatarFilePaths.length);
for (let i = 0; i < avatarFilePaths.length; i++) {
  const avatarFilePath = join(avatarsPath, avatarFilePaths[i]);
  const avatar = readFileSync(avatarFilePath);
  avatars[i] = avatar;
}
