import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { v4 as uuidv4 } from "uuid";
import { execSync } from "node:child_process";
import { Repository } from "../../repository/Repository";
import { PrismaPg } from "@prisma/adapter-pg";

export async function createClientAndTestDb() {
  const dbContainer = await new PostgreSqlContainer("postgres:17.5-alpine3.22")
    .withDatabase(`test_${uuidv4().replace(/-/g, "_")}`)
    .withUsername(process.env.POSTGRES_USER!)
    .withPassword(process.env.POSTGRES_PASSWORD!)
    .start();

  const url = dbContainer.getConnectionUri();
  const adapter = new PrismaPg({ connectionString: url });
  const testClient = new PrismaClient({
    adapter,
  });

  execSync("npx prisma migrate deploy", {
    env: { ...process.env, DATABASE_URL: url },
  });

  return {
    repo: new Repository(testClient),
    url,
    cleanup: async () => {
      await testClient.$disconnect();
      await dbContainer.stop();
    },
  };
}
