import { NextFunction, Request, RequestHandler, Response } from "express";
import { repo } from "../../routes/RepoInstance";
import { serializeBigInt } from "common";

export const createWorkLike: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { workId, likerId }: { workId: bigint; likerId: bigint } = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          (await repo.WorkLikes.insertWorkLike(workId, likerId)).id
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getWorkLikesCount: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { workId }: { workId: bigint } = req.body;
    res
      .status(200)
      .json(serializeBigInt(await repo.WorkLikes.selectWorkLikesCount(workId)));
  } catch (e) {
    next(e);
  }
};
