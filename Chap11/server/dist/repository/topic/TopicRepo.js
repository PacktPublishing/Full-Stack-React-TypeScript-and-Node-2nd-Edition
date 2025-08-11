import { PrismaClient } from "../../generated/prisma";
export class TopicRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async insertTopic(name) {
        return await this.#client.topic.create({
            data: {
                name,
            },
        });
    }
    async selectAllTopics() {
        return await this.#client.topic.findMany({
            orderBy: {
                name: "desc",
            },
        });
    }
}
