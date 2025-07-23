import type { Request, Response, NextFunction } from "express";
import { Repository } from "../repository/Repository";
import { serializeBigInt } from "lib";
import { OctetType } from "./lib/Constants";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./lib/AuthenticationUtils";

export const createProfileAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
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

export const getProfileAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const file = await repo.ProfileAvatar.selectProfileAvatar(
      BigInt(req.params.avatarId)
    );

    res.status(200).contentType(OctetType).send(file?.avatar);
  } catch (e) {
    next(e);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { userName, password }: { userName: string; password: string } =
      req.body;
    const result = await repo.Profile.login(userName, password);

    if (!result.status && !result.profileId) {
      res.status(401).json({ message: "Failed to authenticate" });
      return;
    }

    const userId = result.profileId!.toString();
    const accessToken = jwt.sign({ userId }, JWT_SECRET, {
      subject: "authenticate",
      expiresIn: "1h",
    });

    res.status(200).json({
      userId,
      accessToken,
    });
  } catch (e) {
    console.log("login error:", e);
    next(e);
  }
};

export const createProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
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

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
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

    await repo.Profile.updateProfile(
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
  next: NextFunction,
  repo: Repository
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

export const getMostPopularAuthors = async (
  _req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const authors = await repo.Profile.selectMostPopularAuthors();
    res.status(200).json(serializeBigInt(authors));
  } catch (e) {
    next(e);
  }
};
