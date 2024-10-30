import { Request, Response, NextFunction, RequestHandler } from "express";
import { repo } from "../routes/RepoInstance";
import { serializeBigInt } from "common";
import { octetType } from "./lib/Constants";
import { logger } from "../lib/utils/Logger";

export const createProfileAvatar: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      res.status(400).send(Error("No file provided"));
      return;
    }

    const file = await repo.ProfileAvatar.insertProfileAvatar(req.file.buffer);
    res.status(200).json(serializeBigInt(file?.id));
  } catch (e) {
    next(e);
  }
};

export const getProfileAvatar: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = await repo.ProfileAvatar.selectProfileAvatar(
      BigInt(req.params.avatarId)
    );

    res.status(200).contentType(octetType).send(file?.avatar);
  } catch (e) {
    next(e);
  }
};

export const createProfile: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      userName,
      password,
      fullName,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
    }: {
      userName: string;
      password: string;
      fullName: string;
      description: string;
      socialLinkPrimary: string | undefined;
      socialLinkSecondary: string | undefined;
    } = req.body;

    const profile = await repo.Profile.insertProfile(
      userName,
      password,
      fullName,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
      req.file?.buffer
    );

    res.status(200).json(serializeBigInt(profile.id));
  } catch (e) {
    next(e);
  }
};

export const updateProfile: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      profileId,
      fullName,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
    }: {
      profileId: bigint;
      fullName: string;
      description: string;
      socialLinkPrimary: string | undefined;
      socialLinkSecondary: string | undefined;
    } = req.body;

    await repo.Profile.updateProfile(
      profileId,
      fullName,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
      req.file?.buffer
    );

    res.status(204).send();
  } catch (e) {
    next(e);
  }
};

export const getProfile: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profileId = req.params.profileId;
    res
      .status(200)
      .json(
        serializeBigInt(await repo.Profile.selectProfile(BigInt(profileId)))
      );
  } catch (e) {
    next(e);
  }
};

export const getMostPopularAuthors: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await repo.Profile.selectMostPopularAuthors();
    res.status(200).json(serializeBigInt(authors));
  } catch (e) {
    next(e);
  }
};
