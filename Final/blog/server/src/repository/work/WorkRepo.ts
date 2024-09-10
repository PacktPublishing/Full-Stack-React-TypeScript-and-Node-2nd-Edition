import { PrismaClient } from "@prisma/client";
import { WorkImageRepo } from "./WorkImageRepo.js";
import { WorkImageItem } from "./WorkImage.js";
import { CaseSensitivity, PAGE_SIZE, SortOrder } from "../lib/Constants.js";
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
    /// the topics here are considered overwrites, if any existing they will be deleted
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
      const existingWorkTopicIds = new Set(
        existingWorkTopics.map((wt) => wt.id)
      );
      await tx.workTopic.deleteMany({
        where: {
          id: {
            in: Array.from(existingWorkTopicIds),
          },
        },
      });

      const topicsToAdd = new Set<bigint>();
      const existingTopicIds = (
        await tx.workTopic.findMany({
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
        })
      ).map((wt) => wt.topicId);
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
  async selectMostPopularWorks(
    topicId?: bigint,
    pageSize: number = PAGE_SIZE,
    /// lastCursor is the work id
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
    pageSize: number,
    /// cursor is work id
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

  async selectWorksOfFollowed(
    followerId: bigint,
    pageSize: number,
    lastCursor?: bigint
  ) {
    const works = await this.#client.follow.findMany({
      select: {
        followed: {
          select: {
            works: {
              take: pageSize,
              orderBy: {
                id: SortOrder.Desc,
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
              where: lastCursor
                ? {
                    id: {
                      lt: lastCursor,
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
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      })
      .slice(0, pageSize);
  }

  /// todo: switch to using TypedSql
  async selectWorksOfOneFollowed(
    followedId: bigint,
    pageSize: number,
    workIdCursor?: bigint
  ) {
    const works = await this.#client.follow.findMany({
      select: {
        followed: {
          select: {
            works: {
              take: pageSize,
              orderBy: {
                id: SortOrder.Desc,
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
        followedId,
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
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      })
      .slice(0, pageSize);
  }

  async selectWorksByTopic(
    topicId: bigint,
    pageSize: number,
    workIdCursor?: bigint
  ) {
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

  async searchWorks(
    searchTxt: string,
    pageSize: number,
    workIdCursor?: bigint
  ) {
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
              mode: CaseSensitivity.Insensitive,
            },
          },
          {
            description: {
              contains: searchTxt,
              mode: CaseSensitivity.Insensitive,
            },
          },
        ],
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
