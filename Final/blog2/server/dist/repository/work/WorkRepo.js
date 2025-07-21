import { PrismaClient } from "../../generated/prisma";
import { selectWorksOfOneFollowed } from "../../generated/prisma/sql";
import { WorkImageRepo } from "./WorkImageRepo.js";
import {} from "./WorkImage.js";
import { PAGE_SIZE } from "../lib/Constants.js";
export class WorkRepo {
    #client;
    #workImageRepo;
    constructor(client, workImageRepo) {
        this.#client = client;
        this.#workImageRepo = workImageRepo;
    }
    async insertWork(title, description, content, authorId, topicIds, images) {
        return await this.#client.$transaction(async (tx) => {
            const work = await tx.work.create({
                data: {
                    title,
                    description,
                    content,
                    authorId,
                },
            });
            const topicData = new Array(topicIds.length);
            for (let i = 0; i < topicIds.length; i++) {
                topicData[i] = {
                    workId: work.id,
                    topicId: topicIds[i],
                };
            }
            await tx.workTopic.createMany({
                data: topicData,
            });
            await this.#workImageRepo.insertWorkImages(images, work.id, tx);
            return work;
        });
    }
    async updateWork(workId, title, description, content, 
    /// the topics here are considered overwrites, if any existing they will be deleted
    topicIds, images) {
        return await this.#client.$transaction(async (tx) => {
            await tx.work.update({
                where: {
                    id: workId,
                },
                data: {
                    title,
                    description,
                    content,
                },
            });
            const existingWorkTopics = await tx.workTopic.findMany({
                select: { id: true, topicId: true },
                where: {
                    workId: {
                        equals: workId,
                    },
                    topicId: {
                        notIn: topicIds,
                    },
                },
            });
            const existingWorkTopicIds = new Set(existingWorkTopics.map((wt) => wt.id));
            await tx.workTopic.deleteMany({
                where: {
                    id: {
                        in: Array.from(existingWorkTopicIds),
                    },
                },
            });
            const topicsToAdd = new Set();
            const existingTopicIds = (await tx.workTopic.findMany({
                select: {
                    topicId: true,
                },
                where: {
                    workId: {
                        equals: workId,
                    },
                    topicId: {
                        in: topicIds,
                    },
                },
            })).map((wt) => wt.topicId);
            for (let i = 0; i < topicIds.length; i++) {
                if (!existingTopicIds.includes(topicIds[i])) {
                    topicsToAdd.add(topicIds[i]);
                }
            }
            await tx.workTopic.createMany({
                data: Array.from(topicsToAdd).map((topicId) => ({
                    workId,
                    topicId,
                })),
            });
            await this.#workImageRepo.insertWorkImages(images, workId, tx);
        });
    }
    async selectWork(workId) {
        return await this.#client.work.findFirst({
            select: {
                id: true,
                updatedAt: true,
                title: true,
                description: true,
                content: true,
                author: {
                    select: {
                        id: true,
                        userName: true,
                        fullName: true,
                        description: true,
                    },
                },
                workTopics: {
                    select: {
                        topic: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                workLikes: {
                    select: {
                        id: true,
                        workId: true,
                        liker: {
                            select: {
                                id: true,
                                userName: true,
                                fullName: true,
                            },
                        },
                    },
                },
            },
            where: {
                id: {
                    equals: workId,
                },
            },
        });
    }
    /// gets works by like count in descending order
    async selectMostPopularWorks(topicId, pageSize = PAGE_SIZE, 
    /// lastCursor is the work id
    lastCursor) {
        const works = await this.#client.work.findMany({
            take: pageSize,
            skip: lastCursor ? 1 : 0,
            cursor: lastCursor
                ? {
                    id: lastCursor,
                }
                : undefined,
            select: {
                id: true,
                updatedAt: true,
                title: true,
                description: true,
                content: true,
                authorId: true,
                author: {
                    select: {
                        userName: true,
                        fullName: true,
                        description: true,
                    },
                },
                workTopics: {
                    select: {
                        topic: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                workLikes: {
                    select: {
                        id: true,
                    },
                },
            },
            where: topicId
                ? {
                    workTopics: {
                        some: {
                            topicId,
                        },
                    },
                }
                : undefined,
            orderBy: [
                {
                    workLikes: {
                        _count: "desc",
                    },
                },
                { id: "desc" },
            ],
        });
        return works.map((w) => ({
            id: w.id,
            updatedAt: w.updatedAt,
            title: w.title,
            description: w.description,
            content: w.content,
            authorId: w.authorId,
            userName: w.author.userName,
            fullName: w.author.fullName,
            authorDesc: w.author.description,
            workTopics: w.workTopics.map((wt) => ({
                id: wt.topic.id,
                name: wt.topic.name,
            })),
            workLikes: w.workLikes,
        }));
    }
    async selectLatestWorksByAuthor(authorId, pageSize, 
    /// cursor is work id
    lastCursor) {
        const works = await this.#client.work.findMany({
            take: pageSize,
            skip: lastCursor ? 1 : 0,
            cursor: lastCursor
                ? {
                    id: lastCursor,
                }
                : undefined,
            select: {
                id: true,
                updatedAt: true,
                title: true,
                description: true,
                content: true,
                authorId: true,
                author: {
                    select: {
                        userName: true,
                        fullName: true,
                        description: true,
                    },
                },
                workTopics: {
                    select: {
                        topic: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                workLikes: {
                    select: {
                        id: true,
                    },
                },
            },
            where: {
                authorId,
            },
            orderBy: {
                id: "desc",
            },
        });
        return works.map((w) => ({
            id: w.id,
            updatedAt: w.updatedAt,
            title: w.title,
            description: w.description,
            content: w.content,
            authorId: w.authorId,
            userName: w.author.userName,
            fullName: w.author.fullName,
            authorDesc: w.author.description,
            workTopics: w.workTopics,
            workLikes: w.workLikes,
        }));
    }
    /// todo: needs review
    async selectWorksOfFollowed(followerId, pageSize, workIdCursor) {
        const works = await this.#client.follow.findMany({
            select: {
                followed: {
                    select: {
                        works: {
                            take: pageSize,
                            orderBy: {
                                id: "desc",
                            },
                            select: {
                                id: true,
                                updatedAt: true,
                                title: true,
                                description: true,
                                content: true,
                                authorId: true,
                                author: {
                                    select: {
                                        userName: true,
                                        fullName: true,
                                        description: true,
                                    },
                                },
                                workTopics: {
                                    select: {
                                        topic: {
                                            select: {
                                                id: true,
                                                name: true,
                                            },
                                        },
                                    },
                                },
                                workLikes: {
                                    select: {
                                        id: true,
                                    },
                                },
                            },
                            where: workIdCursor
                                ? {
                                    id: {
                                        lt: workIdCursor,
                                    },
                                }
                                : undefined,
                        },
                    },
                },
            },
            where: {
                followerId,
            },
        });
        return works
            .flatMap((ws) => {
            return ws.followed.works.map((w) => ({
                id: w.id,
                updatedAt: w.updatedAt,
                title: w.title,
                description: w.description,
                content: w.content,
                authorId: w.authorId,
                userName: w.author.userName,
                fullName: w.author.fullName,
                authorDesc: w.author.description,
                workTopics: w.workTopics,
                workLikes: w.workLikes,
            }));
        })
            .sort((a, b) => {
            if (a.id > b.id)
                return -1;
            if (a.id < b.id)
                return 1;
            return 0;
        })
            .slice(0, pageSize);
    }
    /// note: TypedSql calls require running npx prisma generate --sql first
    async selectWorksOfOneFollowed(followedId, pageSize, 
    /// cursor is work id
    lastCursor) {
        const works = await this.#client.$queryRawTyped(selectWorksOfOneFollowed(followedId, pageSize, lastCursor ?? -1n));
        return works.map((w) => ({
            id: w.id,
            updatedAt: w.updatedAt,
            title: w.title,
            description: w.description,
            content: w.content,
            authorId: w.authorId,
            userName: w.userName,
            fullName: w.fullName,
            authorDesc: w.authorDesc,
            workTopics: w.workTopics,
            workLikes: w.workLikes,
        }));
    }
    async selectWorksByTopic(topicId, pageSize, workIdCursor) {
        const works = await this.#client.work.findMany({
            take: pageSize,
            skip: workIdCursor ? 1 : 0,
            cursor: workIdCursor
                ? {
                    id: workIdCursor,
                }
                : undefined,
            select: {
                id: true,
                updatedAt: true,
                title: true,
                description: true,
                content: true,
                authorId: true,
                author: {
                    select: {
                        userName: true,
                        fullName: true,
                        description: true,
                    },
                },
                workTopics: {
                    select: {
                        topic: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                workLikes: {
                    select: {
                        id: true,
                    },
                },
            },
            where: {
                workTopics: {
                    every: {
                        topicId,
                    },
                },
            },
            orderBy: {
                id: "desc",
            },
        });
        return works.map((w) => ({
            id: w.id,
            updatedAt: w.updatedAt,
            title: w.title,
            description: w.description,
            content: w.content,
            authorId: w.authorId,
            userName: w.author.userName,
            fullName: w.author.fullName,
            authorDesc: w.author.description,
            workTopics: w.workTopics,
            workLikes: w.workLikes,
        }));
    }
    async searchWorks(searchTxt, pageSize, workIdCursor) {
        const works = await this.#client.work.findMany({
            take: pageSize,
            skip: workIdCursor ? 1 : 0,
            cursor: workIdCursor
                ? {
                    id: workIdCursor,
                }
                : undefined,
            select: {
                id: true,
                updatedAt: true,
                title: true,
                description: true,
                content: true,
                authorId: true,
                author: {
                    select: {
                        userName: true,
                        fullName: true,
                        description: true,
                    },
                },
                workTopics: {
                    select: {
                        topic: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                workLikes: {
                    select: {
                        id: true,
                    },
                },
            },
            where: {
                OR: [
                    {
                        title: {
                            contains: searchTxt,
                            mode: "insensitive",
                        },
                    },
                    {
                        description: {
                            contains: searchTxt,
                            mode: "insensitive",
                        },
                    },
                ],
            },
            orderBy: {
                id: "desc",
            },
        });
        return works.map((w) => ({
            id: w.id,
            updatedAt: w.updatedAt,
            title: w.title,
            description: w.description,
            content: w.content,
            authorId: w.authorId,
            userName: w.author.userName,
            fullName: w.author.fullName,
            authorDesc: w.author.description,
            workTopics: w.workTopics,
            workLikes: w.workLikes,
        }));
    }
}
