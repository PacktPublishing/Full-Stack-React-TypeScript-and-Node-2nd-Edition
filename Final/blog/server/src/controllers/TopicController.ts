import { NextFunction, Request, RequestHandler, Response } from "express";
import { repo } from "../routes/RepoInstance";
import { serializeBigInt } from "../repository/lib/JsonUtils";

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
