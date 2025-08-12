import { Prisma, PrismaClient } from "../../generated/prisma";
import {} from "./WorkImage.js";
import {} from "@prisma/client/runtime/library";
export class WorkImageRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    /// this function is not exposeed as api route
    async insertWorkImages(images, workId, tx) {
        if (images) {
            const workImagesTask = images.map((image) => tx.workImage.create({
                data: {
                    imagePlaceholder: image.imagePlaceholder,
                    image: image.image,
                    workId: workId,
                },
            }));
            await Promise.all(workImagesTask);
        }
    }
    async selectWorkImage(workId, placeholder) {
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
