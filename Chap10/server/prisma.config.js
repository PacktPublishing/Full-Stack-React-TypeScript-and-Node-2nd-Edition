import "dotenv/config";
import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  // Single file or a folder (for multi-file schemas)
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    // seed: "tsx prisma/seed.ts",
  },
  typedSql: { path: path.join("prisma", "sql") },
});
