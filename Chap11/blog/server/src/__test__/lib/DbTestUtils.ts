import { PrismaClient } from "../../generated/prisma";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { v4 as uuidv4 } from "uuid";
import { execSync } from "node:child_process";
import { Repository } from "../../repository/Repository";

export async function createClientAndTestDb() {
  const dbContainer = await new PostgreSqlContainer("postgres:17.5-alpine3.22")
    .withDatabase(`test_${uuidv4().replace(/-/g, "_")}`)
    .withUsername("fsrtn")
    .withPassword("fsrtn")
    .start();

  const url = dbContainer.getConnectionUri();
  const testClient = new PrismaClient({
    datasources: {
      db: {
        url,
      },
    },
  });

  execSync("npx prisma db push", {
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
