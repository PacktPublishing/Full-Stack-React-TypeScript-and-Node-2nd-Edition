import { Prisma, PrismaClient } from "@prisma/client";
import { WorkImageRepo } from "./workImage/WorkImageRepo.js";
import { WorkImageItem } from "./workImage/WorkImage.js";
import { PAGE_SIZE, SortOrder } from "../lib/utils.js";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class WorkRepo {
  #client: PrismaClient;
  #workImageRepo: WorkImageRepo;

  constructor(client: PrismaClient, workImageRepo: WorkImageRepo) {
    this.#client = client;
    this.#workImageRepo = workImageRepo;
  }

  async insertWork(
    title: string,
    description: string,
    content: string,
    authorId: bigint,
    topicIds: bigint[],
    images?: WorkImageItem[]
  ) {
    return await this.#client.$transaction(async (tx) => {
      const work = await tx.work.create({
        data: {
          title,
          description,
          content,
          authorId,
        },
      });

      const topicData: { workId: bigint; topicId: bigint }[] = new Array(
        topicIds.length
      );
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

  async updateWork(
    workId: bigint,
    title: string,
    description: string,
    content: string,
    /// the topics here are considered adds,
    /// if any already exist it will get skipped else it is added
    topicIds: bigint[],
    images?: WorkImageItem[]
  ) {
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
        select: { topicId: true },
        where: {
          workId: {
            equals: workId,
          },
          topicId: {
            in: topicIds,
          },
        },
      });

      const existingWorkTopicIds = new Set(
        existingWorkTopics.map((wt) => wt.topicId)
      );
      const workTopicsToAdd = new Set<bigint>();
      for (let i = 0; i < topicIds.length; i++) {
        if (!existingWorkTopicIds.has(topicIds[i])) {
          workTopicsToAdd.add(topicIds[i]);
        }
      }
      await tx.workTopic.createMany({
        data: Array.from(workTopicsToAdd).map((topicId) => ({
          workId,
          topicId,
        })),
      });

      await this.#workImageRepo.insertWorkImages(images, workId, tx);
    });
  }

  async selectWork(workId: bigint) {
    return await this.#client.work.findFirst({
      select: {
        id: true,
        updatedAt: true,
        title: true,
        description: true,
        content: true,
        author: {
          select: {
            userName: true,
            fullName: true,
            description: true,
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
  async selectMostPopularWorks(
    topicId?: bigint,
    pageSize: number = PAGE_SIZE,
    lastCursor?: bigint
  ) {
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
            _count: SortOrder.Desc,
          },
        },
        { id: SortOrder.Desc },
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

  async selectLatestWorksByAuthor(
    authorId: bigint,
    /// to page backwards use a negative number
    pageSize: number,
    /// if cursor is undefined this is the first call
    lastCursor: bigint = BigInt(0)
  ) {
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
        id: SortOrder.Desc,
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
