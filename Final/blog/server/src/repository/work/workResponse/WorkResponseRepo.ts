import { PrismaClient } from "@prisma/client";

export class WorkResponseRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertWorkResponse(
    workId: bigint,
    responderId: bigint,
    response: string
  ) {
    return await this.#client.workResponse.create({
      data: {
        workId,
        responderId,
        response,
      },
    });
  }

  async selectWorkResponses(workId: bigint) {
    return await this.#client.workResponse.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        work: {
          select: {
            title: true,
          },
        },
        response: true,
        responder: {
          select: {
            id: true,
            userName: true,
            fullName: true,
            description: true,
          },
        },
      },
      where: {
        workId,
      },
    });
  }
}
