import { Prisma, PrismaClient } from "@prisma/client";
import { WorkImageItem } from "./WorkImage.js";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class WorkImageRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
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

  async insertWorkImages(
    images: WorkImageItem[] | undefined,
    workId: bigint,
    tx: Omit<
      PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
      "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
    >
  ) {
    if (images) {
      const workImagesTask: Promise<{
        id: bigint;
        createdAt: Date;
        updatedAt: Date;
        imagePlaceholder: string;
        image: Buffer;
        workId: bigint;
      }>[] = new Array(images.length);
      for (let i = 0; i < workImagesTask.length; i++) {
        workImagesTask[i] = tx.workImage.create({
          data: {
            imagePlaceholder: images[i].imagePlaceholder,
            image: images[i].image,
            workId: workId,
          },
        });
      }
      await Promise.all(workImagesTask);
    }
  }
}
