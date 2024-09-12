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
    workResponseIdCursor?: bigint
  ) {
    return await this.#client.workResponse.findMany({
      take: pageSize,
      skip: workResponseIdCursor ? 1 : 0,
      cursor: workResponseIdCursor
        ? {
            id: workResponseIdCursor,
          }
        : undefined,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        work: {
          select: {
            id: true,
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

  async selectWorkResponsesByAuthor(
    responderId: bigint,
    pageSize: number,
    workResponseIdCursor?: bigint
  ) {
    return await this.#client.workResponse.findMany({
      take: pageSize,
      skip: workResponseIdCursor ? 1 : 0,
      cursor: workResponseIdCursor
        ? {
            id: workResponseIdCursor,
          }
        : undefined,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        work: {
          select: {
            id: true,
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
        responderId,
      },
      orderBy: {
        id: SortOrder.Desc,
      },
    });
  }
}
