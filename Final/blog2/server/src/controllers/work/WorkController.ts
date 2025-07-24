import type { NextFunction, Request, Response } from "express";
import { serializeBigInt } from "lib";
import { Repository } from "../../repository/Repository";
import type { CreateWorkParams, UpdateWorkParams } from "./WorkModels";
import type { WorkImageItem } from "../../repository/work/WorkImage";
import type { PagingParams, PopularWorkParams } from "../PagingParams";
import { deserializeBigInt } from "lib/src/JsonUtils";

export const createWork = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
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

export const updateWork = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    let {
      workId,
      title,
      description,
      content,
      topicIds,
      images,
    }: UpdateWorkParams = req.body;
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

    await repo.Work.updateWork(
      workId,
      title,
      description,
      content,
      topicIds,
      workImages
    );

    res.status(204).send();
  } catch (e) {
    next(e);
  }
};

export const getWork = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    res
      .status(200)
      .json(serializeBigInt(await repo.Work.selectWork(BigInt(req.params.id))));
  } catch (e) {
    next(e);
  }
};

export const getPopularWork = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const {
      topicId,
      pageSize,
      lastCursor: cursor,
    }: PopularWorkParams = req.body;

    res
      .status(200)
      .json(
        serializeBigInt(
          await repo.Work.selectMostPopularWorks(topicId, pageSize, cursor)
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getLatestWork = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = deserializeBigInt(
      req.body
    );
    const works = await repo.Work.selectLatestWorksByAuthor(
      id,
      pageSize,
      lastCursor
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const getWorksOfFollowed = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = deserializeBigInt(
      req.body
    );
    const works = await repo.Work.selectWorksOfFollowed(
      id,
      pageSize,
      lastCursor
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const getWorksOfOneFollowed = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = deserializeBigInt(
      req.body
    );

    const works = await repo.Work.selectWorksOfOneFollowed(
      id,
      pageSize,
      lastCursor
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const getWorksByTopic = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = deserializeBigInt(
      req.body
    );
    const works = await repo.Work.selectWorksByTopic(id, pageSize, lastCursor);

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const searchWorks = async (
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository
) => {
  try {
    const {
      searchTxt,
      pageSize,
      lastCursor,
    }: { searchTxt: string; pageSize: number; lastCursor: bigint } = req.body;
    const works = await repo.Work.searchWorks(searchTxt, pageSize, lastCursor);

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};
