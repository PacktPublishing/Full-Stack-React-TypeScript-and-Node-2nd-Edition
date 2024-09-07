import { NextFunction, Request, RequestHandler, Response } from "express";
import { repo } from "../../routes/RepoInstance";
import { serializeBigInt } from "common";

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
    const workId = req.params.workId;
    res
      .status(200)
      .json(
        serializeBigInt(await repo.WorkResp.selectWorkResponses(BigInt(workId)))
      );
  } catch (e) {
    next(e);
  }
};
