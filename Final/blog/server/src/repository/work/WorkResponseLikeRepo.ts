import { PrismaClient } from "@prisma/client";

export class WorkResponseLikeRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertWorkRespLike(workResponseId: bigint, likerId: bigint) {
    return await this.#client.workResponseLike.create({
      data: {
        workResponseId,
        likerId,
      },
    });
  }

  async selectedWorkRespLikes(workResponseId: bigint) {
    return this.#client.workResponseLike.findMany({
      where: {
        workResponseId,
      },
    });
  }
}
