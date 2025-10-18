import { PrismaClient } from "../../generated/prisma";

export class WorkTopicRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertWorkTopic(workId: bigint, topicId: bigint) {
    return this.#client.workTopic.create({
      data: {
        workId,
        topicId,
      },
    });
  }

  async selectWorkTopicsByWork(workId: bigint) {
    return this.#client.workTopic.findMany({
      where: {
        workId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
}
