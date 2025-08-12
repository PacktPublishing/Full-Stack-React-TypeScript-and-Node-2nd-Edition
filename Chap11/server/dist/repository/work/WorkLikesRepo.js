import { PrismaClient } from "../../generated/prisma";
export class WorkLikesRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async insertWorkLike(workId, likerId) {
        return await this.#client.workLike.create({
            data: {
                workId,
                likerId,
            },
        });
    }
    async selectWorkLikesCount(workId) {
        return await this.#client.workLike.count({
            where: {
                workId,
            },
        });
    }
}
