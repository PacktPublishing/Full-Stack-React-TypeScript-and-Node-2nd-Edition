import { Request, Response, NextFunction, RequestHandler } from "express";
import { repo } from "../routes/RepoInstance";
import { serializeBigInt } from "common";
import { logger } from "../lib/utils/Logger";
import { octetType } from "./lib/Constants";

export const createProfileAvatar: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      logger.error(Error("No file provided"));
      return res.status(400).send(Error("No file provided"));
    }

    const file = await repo.ProfileAvatar.insertProfileAvatar(req.file.buffer);
    res.status(200).contentType(octetType).send(file?.avatar);
  } catch (e) {
    logger.error(e);
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

export const getMostPopularAuthors: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await repo.Profile.selectMostPopularAuthors();
    const serializable = serializeBigInt(authors);
    res.status(200).json(serializable);
  } catch (e) {
    next(e);
  }
};
