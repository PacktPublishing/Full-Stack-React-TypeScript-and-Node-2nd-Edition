import { PrismaClient } from "@prisma/client";
import { SortOrder } from "../lib/Constants.js";

export class TopicRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertTopic(name: string) {
    return await this.#client.topic.create({
      data: {
        name,
      },
    });
  }

  async selectAllTopics() {
    return await this.#client.topic.findMany({
      orderBy: {
        name: SortOrder.Desc,
      },
    });
  }
}
