import type { NextFunction, Request, Response } from "express";
import { Repository } from "../../repository/Repository";
import { serializeBigInt } from "lib";

export const createWorkLike = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
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

export const getWorkLikesCount = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
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
