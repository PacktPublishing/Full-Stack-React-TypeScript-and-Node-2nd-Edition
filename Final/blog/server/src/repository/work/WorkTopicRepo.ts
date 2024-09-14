import { PrismaClient } from "@prisma/client";
import { SortOrder } from "../lib/Constants.js";

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
        updatedAt: SortOrder.Desc,
      },
    });
  }
}
