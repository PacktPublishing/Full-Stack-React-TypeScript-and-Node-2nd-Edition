import { PrismaClient } from "../../generated/prisma";
export class WorkRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
}
