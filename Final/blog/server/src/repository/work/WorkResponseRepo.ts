import { PrismaClient } from "@prisma/client";
import { SortOrder } from "../lib/Constants";

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

  async selectWorkResponses(
    workId: bigint,
    pageSize: number,
    lastCursor?: bigint
  ) {
    return await this.#client.workResponse.findMany({
      take: pageSize,
      skip: lastCursor ? 1 : 0,
      cursor: lastCursor
        ? {
            id: lastCursor,
          }
        : undefined,
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
      orderBy: {
        id: SortOrder.Desc,
      },
    });
  }
}
