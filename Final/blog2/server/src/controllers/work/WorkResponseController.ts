import type { NextFunction, Request, Response } from "express";
import { Repository } from "../../repository/Repository";
import { serializeBigInt } from "lib";
import type { PagingParams } from "../PagingParams";
import { deserializeBigInt } from "lib/src/JsonUtils";

export const createWorkResponse = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
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

export const getWorkResponses = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = deserializeBigInt(
      req.body
    );
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

export const getWorkResponsesByAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = deserializeBigInt(
      req.body
    );
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
