import { PrismaClient } from "../../generated/prisma/client";
import { PAGE_SIZE } from "../lib/Constants.js";

export class ProfileRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  // note: in chapter 12 we will learn about authentication and build out this function
  async login(
    userName: string,
    _password: string
  ): Promise<{ status: boolean; profileId?: bigint }> {
    const profile = await this.#client.profile.findFirst({
      select: {
        id: true,
        password: true,
      },
      where: {
        userName,
      },
    });
    if (!profile) return { status: false };

    const isPasswordValid = true;
    if (isPasswordValid) {
      return { status: true, profileId: profile.id };
    }
    return { status: false };
  }

  async insertProfile(
    userName: string,
    password: string,
    fullName: string,
    description: string,
    socialLinkPrimary: string | undefined,
    socialLinkSecondary: string | undefined,
    avatar: Buffer | undefined
  ) {
    return await this.#client.$transaction(async (tx) => {
      let avatarId: bigint | undefined;
      if (avatar) {
        const avatarResult = await tx.profileAvatar.create({
          data: {
            avatar,
          },
        });
        avatarId = avatarResult.id;
      }

      return await tx.profile.create({
        select: {
          id: true,
        },
        data: {
          userName,
          password,
          fullName,
          description,
          socialLinkPrimary,
          socialLinkSecondary,
          avatarId,
        },
      });
    });
  }

  async updateProfile(
    profileId: bigint,
    fullName: string,
    password: string,
    description: string,
    socialLinkPrimary: string | undefined,
    socialLinkSecondary: string | undefined,
    avatar: Buffer | undefined
  ) {
    return await this.#client.$transaction(async (tx) => {
      let avatarId: bigint | undefined;
      if (avatar) {
        const currentAvatarId = await tx.profile.findFirst({
          select: {
            avatarId: true,
          },
          where: {
            id: profileId,
          },
        });
        if (currentAvatarId && currentAvatarId.avatarId) {
          await tx.profileAvatar.delete({
            where: {
              id: currentAvatarId.avatarId,
            },
          });
          const avatarResult = await tx.profileAvatar.create({
            data: {
              avatar,
            },
          });
          avatarId = avatarResult.id;
        } else {
          const avatarResult = await tx.profileAvatar.create({
            data: {
              avatar,
            },
          });
          avatarId = avatarResult.id;
        }
      }

      return await tx.profile.update({
        select: {
          id: true,
        },
        where: {
          id: profileId,
        },
        data: {
          fullName,
          password,
          description,
          socialLinkPrimary,
          socialLinkSecondary,
          avatarId,
        },
      });
    });
  }

  async selectProfile(profileId: bigint) {
    return await this.#client.profile.findFirst({
      omit: {
        password: true,
      },
      where: {
        id: profileId,
      },
    });
  }

  async selectMostPopularAuthors(size: number = PAGE_SIZE) {
    const authors = await this.#client.work.findMany({
      select: {
        author: {
          include: {
            works: {
              include: {
                workLikes: true,
              },
            },
          },
        },
      },
      orderBy: {
        workLikes: {
          _count: "desc",
        },
      },
      take: size,
    });

    return authors.map((a) => ({
      id: a.author.id,
      createdAt: a.author.createdAt,
      updatedAt: a.author.updatedAt,
      userName: a.author.userName,
      fullName: a.author.fullName,
      description: a.author.description,
      socialLinkPrimary: a.author.socialLinkPrimary,
      socialLinkSecondary: a.author.socialLinkSecondary,
      avatarId: a.author.avatarId,
      works: a.author.works,
    }));
  }
}
