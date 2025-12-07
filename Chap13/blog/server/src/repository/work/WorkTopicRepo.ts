import { PrismaClient } from "../../generated/prisma/client";

export class WorkTopicRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertWorkTopic(workId: bigint, topicId: bigint) {
    return await this.#client.workTopic.create({
      data: {
        workId,
        topicId,
      },
    });
  }

  async selectWorkTopicsByWork(workId: bigint) {
    return await this.#client.workTopic.findMany({
      where: {
        workId: {
          equals: workId,
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
}
