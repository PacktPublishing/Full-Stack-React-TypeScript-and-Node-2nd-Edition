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
      const workImagesTask = images.map((image) =>
        tx.workImage.create({
          data: {
            imagePlaceholder: image.imagePlaceholder,
            image: image.image,
            workId: workId,
          },
        })
      );
      await Promise.all(workImagesTask);
    }
  }

  async selectWorkImage(workId: bigint, placeholder: string) {
    return this.#client.workImage.findFirst({
      where: {
        workId: {
          equals: workId,
        },
        imagePlaceholder: placeholder,
      },
    });
  }
}
