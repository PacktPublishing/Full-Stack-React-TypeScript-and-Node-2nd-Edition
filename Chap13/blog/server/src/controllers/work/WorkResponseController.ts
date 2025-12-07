import type { NextFunction, Request, Response } from "express";
import { serializeBigInt } from "lib";
import type { PagingParams } from "../../routes/PagingParams";

export const createWorkResponse = async (
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
            await req.repo.WorkResp.insertWorkResponse(
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
  next: NextFunction
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          await req.repo.WorkResp.selectWorkResponses(id, pageSize, lastCursor)
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getWorkResponsesByResponder = async (
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
          await req.repo.WorkResp.selectWorkResponsesByResponder(
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
