import type { Request, Response, NextFunction } from "express";
import { serializeBigInt } from "lib";
import { OctetType } from "./lib/Constants";

export const createProfileAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      res.status(400).send(Error("No file provided"));
      return;
    }

    const file = await req.repo.ProfileAvatar.insertProfileAvatar(
      req.file.buffer
    );
    res.status(200).json(serializeBigInt(file?.id));
  } catch (e) {
    next(e);
  }
};

export const getProfileAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = await req.repo.ProfileAvatar.selectProfileAvatar(
      BigInt(req.params.avatarId)
    );

    res.status(200).contentType(OctetType).send(file?.avatar);
  } catch (e) {
    next(e);
  }
};

export const createProfile = async (
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

    const profile = await req.repo.Profile.insertProfile(
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

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      profileId,
      fullName,
      password,
      description,
      socialLinkPrimary,
      socialLinkSecondary,
    }: {
      profileId: bigint;
      fullName: string;
      password: string;
      description: string;
      socialLinkPrimary: string | undefined;
      socialLinkSecondary: string | undefined;
    } = req.body;

    await req.repo.Profile.updateProfile(
      profileId,
      fullName,
      password,
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

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profileId = req.params.profileId;
    const profile = await req.repo.Profile.selectProfile(BigInt(profileId));
    res.status(200).json(profile ? serializeBigInt(profile) : profile);
  } catch (e) {
    next(e);
  }
};

export const getMostPopularAuthors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await req.repo.Profile.selectMostPopularAuthors();
    res.status(200).json(serializeBigInt(authors));
  } catch (e) {
    next(e);
  }
};
