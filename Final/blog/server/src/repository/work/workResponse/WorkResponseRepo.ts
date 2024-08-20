import { PrismaClient } from "@prisma/client";

export class WorkResponseRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertWorkResponse(workId: bigint, response: string) {
    return await this.#client.workResponse.create({
      data: {
        workId,
        response,
      },
    });
  }

  async selectWorkResponses(workId: bigint) {
    return await this.#client.workResponse.findMany({
      where: {
        workId,
      },
    });
  }
}
