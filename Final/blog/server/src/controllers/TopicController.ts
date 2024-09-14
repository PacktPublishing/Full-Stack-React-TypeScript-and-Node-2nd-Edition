import { NextFunction, Request, RequestHandler, Response } from "express";
import { repo } from "../routes/RepoInstance";
import { serializeBigInt } from "common";

export const createTopic: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
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

export const getAllTopics: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(serializeBigInt(await repo.Topic.selectAllTopics()));
  } catch (e) {
    next(e);
  }
};
