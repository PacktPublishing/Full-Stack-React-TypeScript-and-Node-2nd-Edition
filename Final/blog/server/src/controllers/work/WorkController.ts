import { NextFunction, Request, RequestHandler, Response } from "express";
import { serializeBigInt } from "common";
import { repo } from "../../routes/RepoInstance";
import { PopularWorkParameter } from "./WorkModels";
import { logger } from "../../lib/utils/Logger";
import { PAGE_SIZE } from "../../repository/lib/Constants";

export const getWork: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res
      .status(200)
      .json(serializeBigInt(await repo.Work.selectWork(BigInt(req.params.id))));
  } catch (e) {
    next(e);
  }
};

export const getPopularWork: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { topicId, pageSize, cursor }: PopularWorkParameter = req.body;
    logger.info(
      "topicId, pageSize, cursor",
      req.body,
      topicId,
      pageSize,
      cursor
    );
    res
      .status(200)
      .json(
        serializeBigInt(
          await repo.Work.selectMostPopularWorks(
            topicId ? BigInt(topicId) : undefined,
            pageSize ? pageSize : undefined,
            cursor ? BigInt(cursor) : undefined
          )
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getLatestWork: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const works = await repo.Work.selectLatestWorksByAuthor(
      BigInt(req.params.authorId),
      PAGE_SIZE,
      req.params.cursor ? BigInt(req.params.cursor) : undefined
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const getWorkImage: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workId = req.params.workId;
    const placeholder = req.params.placeholder;

    const image = await repo.WorkImage.selectWorkImage(
      BigInt(workId),
      placeholder
    );

    res.contentType("image/jpeg");
    res.status(200).send(image?.image);
  } catch (e) {
    next(e);
  }
};
