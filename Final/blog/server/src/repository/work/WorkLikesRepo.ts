import { PrismaClient } from "@prisma/client";

export class WorkLikesRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertWorkLike(workId: bigint, likerId: bigint) {
    return await this.#client.workLike.create({
      data: {
        workId,
        likerId,
      },
    });
  }

  async selectWorkLikes(workId: bigint) {
    return await this.#client.workLike.findMany({
      where: {
        workId,
      },
    });
  }
}
