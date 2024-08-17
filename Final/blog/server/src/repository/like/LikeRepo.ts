import { PrismaClient } from "@prisma/client";

export class LikeRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }
}
