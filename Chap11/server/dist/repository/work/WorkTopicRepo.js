import { PrismaClient } from "../../generated/prisma";
export class WorkTopicRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async insertWorkTopic(workId, topicId) {
        return this.#client.workTopic.create({
            data: {
                workId,
                topicId,
            },
        });
    }
    async selectWorkTopicsByWork(workId) {
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
