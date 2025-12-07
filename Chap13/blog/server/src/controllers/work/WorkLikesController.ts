import type { NextFunction, Request, Response } from "express";
import { serializeBigInt } from "lib";

export const createWorkLike = async (
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
          (await req.repo.WorkLikes.insertWorkLike(workId, likerId)).id
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getWorkLikesCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workId = req.params.workId as unknown as bigint;
    res.status(200).json(await req.repo.WorkLikes.selectWorkLikesCount(workId));
  } catch (e) {
    next(e);
  }
};
