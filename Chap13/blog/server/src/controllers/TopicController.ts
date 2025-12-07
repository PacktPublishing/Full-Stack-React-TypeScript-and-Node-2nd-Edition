import type { NextFunction, Request, Response } from "express";
import { serializeBigInt } from "lib";

export const createTopic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name }: { name: string } = req.body;
    res
      .status(200)
      .json(serializeBigInt((await req.repo.Topic.insertTopic(name)).id));
  } catch (e) {
    next(e);
  }
};

export const getAllTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res
      .status(200)
      .json(serializeBigInt(await req.repo.Topic.selectAllTopics()));
  } catch (e) {
    next(e);
  }
};
