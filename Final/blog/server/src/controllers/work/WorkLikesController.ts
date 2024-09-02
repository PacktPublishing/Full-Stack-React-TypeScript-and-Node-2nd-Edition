import { NextFunction, Request, Response } from "express";
import { repo } from "../../routes/RepoInstance";
import { serializeBigInt } from "common";

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
          (await repo.WorkLikes.insertWorkLike(workId, likerId)).id
        )
      );
  } catch (e) {
    next(e);
  }
};
