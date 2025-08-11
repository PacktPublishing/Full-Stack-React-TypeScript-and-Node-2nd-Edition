import { PrismaClient } from "../../generated/prisma/client";
export class WorkResponseLikeRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async insertWorkRespLike(workResponseId, likerId) {
        return await this.#client.workResponseLike.create({
            data: {
                workResponseId,
                likerId,
            },
        });
    }
    async selectedWorkRespLikes(workResponseId) {
        return this.#client.workResponseLike.findMany({
            where: {
                workResponseId,
            },
        });
    }
}
