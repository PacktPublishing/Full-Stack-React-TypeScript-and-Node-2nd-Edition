import { PrismaClient } from "@prisma/client";
import { PAGE_SIZE, SortOrder } from "../lib/Constants.js";
import {
  getEnvSalt,
  hashPassword,
  verifyPassword,
} from "../../lib/utils/PasswordHash.js";

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

    if (
      await verifyPassword(
        password,
        profile.password,
        process.env.PASSWORDHASH_SALT || ""
      )
    ) {
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

      const hashedPassword = await hashPassword(password, getEnvSalt());

      return await tx.profile.create({
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
    profileId: bigint,
    fullName: string,
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
        where: {
          id: profileId,
        },
        data: {
          fullName,
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
          _count: SortOrder.Desc,
        },
      },
      take: size,
    });

    return authors.map((a) => a.author);
  }
}
