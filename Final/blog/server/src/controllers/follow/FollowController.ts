import { NextFunction, Request, Response } from "express";
import { repo } from "../../routes/RepoInstance";
import { FollowParams } from "./FollowModels";
import { serializeBigInt } from "common/src/JsonUtils";
import { PagingParams } from "../PagingParams";

export async function createFollow(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { followedId, followerId }: FollowParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          (await repo.Follow.insertFollow(followedId, followerId)).id
        )
      );
  } catch (e) {
    next(e);
  }
}

export async function getFollowers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          await repo.Follow.selectFollowers(id, pageSize, lastCursor)
        )
      );
  } catch (e) {
    next(e);
  }
}

export async function getFollowed(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          await repo.Follow.selectFollowed(id, pageSize, lastCursor)
        )
      );
  } catch (e) {
    next(e);
  }
}
