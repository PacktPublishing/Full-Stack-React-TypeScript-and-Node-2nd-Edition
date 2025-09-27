import { PrismaClient } from "../../generated/prisma";
import { hashPassword, verifyPassword } from "../../lib/utils/PasswordHash";
import { PAGE_SIZE } from "../lib/Constants.js";

export class ProfileRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async login(
    userName: string,
    password: string
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

    if (await verifyPassword(password, profile.password)) {
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

      const hashedPassword = await hashPassword(password);

      return await tx.profile.create({
        select: {
          id: true,
        },
        data: {
          userName,
          password: hashedPassword,
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
    profileUpdaterId: bigint,
    profileToUpdateId: bigint,
    fullName: string,
    password: string,
    description: string,
    socialLinkPrimary: string | undefined,
    socialLinkSecondary: string | undefined,
    avatar: Buffer | undefined
  ) {
    if (profileUpdaterId !== profileToUpdateId) {
      throw new Error("You can update only your own profile");
    }

    return await this.#client.$transaction(async (tx) => {
      let avatarId: bigint | undefined;
      if (avatar) {
        const currentAvatarId = await tx.profile.findFirst({
          select: {
            avatarId: true,
          },
          where: {
            id: profileToUpdateId,
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

      const hashedPassword = await hashPassword(password);

      return await tx.profile.update({
        select: {
          id: true,
        },
        where: {
          id: profileToUpdateId,
        },
        data: {
          fullName,
          password: hashedPassword,
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
