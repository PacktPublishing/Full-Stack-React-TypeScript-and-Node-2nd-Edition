import { NextFunction, Request, RequestHandler, Response } from "express";
import { serializeBigInt } from "common";
import { repo } from "../../routes/RepoInstance";
import {
  CreateWorkParams,
  LatestWorkParams,
  PopularWorkParams,
} from "./WorkModels";
import { logger } from "../../lib/utils/Logger";
import { PAGE_SIZE } from "../../repository/lib/Constants";
import { WorkImageItem } from "../../repository/work/workImage/WorkImage";

export const createWork: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let {
      title,
      description,
      content,
      authorId,
      topicIds,
      images,
    }: CreateWorkParams = req.body;
    const workImages: WorkImageItem[] = [];
    if (req.files) {
      if (Array.isArray(req.files)) {
        for (let i = 0; i < req.files.length; i++) {
          workImages.push({
            imagePlaceholder: images![i]["imagePlaceholder"],
            image: req.files[i].buffer,
          });
        }
      } else if (typeof req.files === "object") {
        const files = req.files["images"];
        for (let i = 0; i < files.length; i++) {
          workImages.push({
            imagePlaceholder: images![i]["imagePlaceholder"],
            image: files[i].buffer,
          });
        }
      }
    }

    res
      .status(200)
      .json(
        serializeBigInt(
          (
            await repo.Work.insertWork(
              title,
              description,
              content,
              authorId,
              topicIds,
              workImages
            )
          ).id
        )
      );
  } catch (e) {
    next(e);
  }
};

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
    const {
      topicId,
      pageSize,
      lastCursor: cursor,
    }: PopularWorkParams = req.body;
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
    const { authorId, pageSize, lastCursor }: LatestWorkParams = req.body;
    const works = await repo.Work.selectLatestWorksByAuthor(
      BigInt(authorId),
      pageSize || PAGE_SIZE,
      lastCursor ? BigInt(lastCursor) : undefined
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};
