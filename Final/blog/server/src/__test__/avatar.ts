import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getAvatar() {
  const filePath = join(__dirname, "/avatars/longhair.jpg");
  return readFileSync(filePath);
}
