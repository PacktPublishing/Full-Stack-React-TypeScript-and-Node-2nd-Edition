import { NextFunction, Request, RequestHandler, Response } from "express";
import { repo } from "../../routes/RepoInstance";
import { serializeBigInt } from "common";
import { PagingParams } from "../PagingParams";

export const createWorkResponse: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      workId,
      responderId,
      response,
    }: { workId: bigint; responderId: bigint; response: string } = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          (
            await repo.WorkResp.insertWorkResponse(
              workId,
              responderId,
              response
            )
          ).id
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getWorkResponses: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          await repo.WorkResp.selectWorkResponses(id, pageSize, lastCursor)
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getWorkResponsesByAuthor: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          await repo.WorkResp.selectWorkResponsesByAuthor(
            id,
            pageSize,
            lastCursor
          )
        )
      );
  } catch (e) {
    next(e);
  }
};
