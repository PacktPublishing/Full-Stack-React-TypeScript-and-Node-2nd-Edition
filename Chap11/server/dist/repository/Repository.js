import { PrismaClient } from "../generated/prisma";
export class Repository {
    #client;
    get Client() {
        return this.#client;
    }
    constructor(client = new PrismaClient()) {
        this.#client = client;
    }
    async close() {
        await this.#client.$disconnect();
    }
}
export const repo = new Repository();
