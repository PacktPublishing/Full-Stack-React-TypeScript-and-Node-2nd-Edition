import { Prisma, PrismaClient } from "../../generated/prisma/client";
import { type WorkImageItem } from "./WorkImage.js";

export class WorkImageRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  /// this function is not exposeed as api route
  async insertWorkImages(
    images: WorkImageItem[] | undefined,
    workId: bigint,
    tx: Prisma.TransactionClient
  ) {
    if (images) {
      await tx.workImage.createMany({
        data: images.map((image) => ({
          imagePlaceholder: image.imagePlaceholder,
          image: image.image,
          workId: workId,
        })),
      });
    }
  }

  async selectWorkImage(workId: bigint, placeholder: string) {
    return await this.#client.workImage.findFirst({
      where: {
        workId: {
          equals: workId,
        },
        imagePlaceholder: placeholder,
      },
    });
  }
}
