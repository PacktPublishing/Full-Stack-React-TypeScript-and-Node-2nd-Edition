import { Request, Response, NextFunction, RequestHandler } from "express";
import { repo } from "../routes/RepoInstance";
import { serializeBigInt } from "common";

export const getProfileAvatar: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = await repo.ProfileAvatar.selectProfileAvatar(
      BigInt(req.params.avatarId)
    );

    res.status(200).contentType("image/jpeg").send(file?.avatar);
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
