import { PrismaClient } from "../../generated/prisma";
export class WorkResponseRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async insertWorkResponse(workId, responderId, response) {
        return await this.#client.workResponse.create({
            data: {
                workId,
                responderId,
                response,
            },
        });
    }
    async selectWorkResponses(workId, pageSize, workResponseIdCursor) {
        return await this.#client.workResponse.findMany({
            take: pageSize,
            skip: workResponseIdCursor ? 1 : 0,
            cursor: workResponseIdCursor
                ? {
                    id: workResponseIdCursor,
                }
                : undefined,
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                work: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
                response: true,
                responder: {
                    select: {
                        id: true,
                        userName: true,
                        fullName: true,
                        description: true,
                    },
                },
            },
            where: {
                workId,
            },
            orderBy: {
                id: "desc",
            },
        });
    }
    async selectWorkResponsesByAuthor(responderId, pageSize, workResponseIdCursor) {
        return await this.#client.workResponse.findMany({
            take: pageSize,
            skip: workResponseIdCursor ? 1 : 0,
            cursor: workResponseIdCursor
                ? {
                    id: workResponseIdCursor,
                }
                : undefined,
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                work: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
                response: true,
                responder: {
                    select: {
                        id: true,
                        userName: true,
                        fullName: true,
                        description: true,
                    },
                },
            },
            where: {
                responderId,
            },
            orderBy: {
                id: "desc",
            },
        });
    }
}
