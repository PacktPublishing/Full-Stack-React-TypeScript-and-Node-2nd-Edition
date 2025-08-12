import type { NextFunction, Request, Response } from "express";
import { Repository } from "../repository/Repository";
import { serializeBigInt } from "lib";

export const createTopic = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { name }: { name: string } = req.body;
    res
      .status(200)
      .json(serializeBigInt((await repo.Topic.insertTopic(name)).id));
  } catch (e) {
    next(e);
  }
};

export const getAllTopics = async (
  _req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    res.status(200).json(serializeBigInt(await repo.Topic.selectAllTopics()));
  } catch (e) {
    next(e);
  }
};
