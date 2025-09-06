import type { NextFunction, Request, Response } from "express";
import { serializeBigInt } from "lib";
import type { CreateWorkParams, UpdateWorkParams } from "./WorkModels";
import type { WorkImageItem } from "../../repository/work/WorkImage";
import type { PagingParams, PopularWorkParams } from "../PagingParams";

export const createWork = async (
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
      imagesPlaceholders,
    }: CreateWorkParams = req.body;
    const workImages: WorkImageItem[] = [];
    if (req.files) {
      if (Array.isArray(req.files)) {
        for (let i = 0; i < req.files.length; i++) {
          workImages.push({
            imagePlaceholder: imagesPlaceholders[i],
            image: req.files[i].buffer,
          });
        }
      } else if (typeof req.files === "object") {
        const files = req.files["images"];
        for (let i = 0; i < files.length; i++) {
          workImages.push({
            imagePlaceholder: imagesPlaceholders[i],
            image: files[i].buffer,
          });
        }
      }
    }

    const newWork = await req.repo.Work.insertWork(
      title,
      description,
      content,
      authorId,
      topicIds,
      workImages
    );

    res.status(200).json(serializeBigInt(newWork.id));
  } catch (e) {
    console.log("Error in /work/new:", e);
    next(e);
  }
};

export const updateWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let {
      workId,
      title,
      description,
      content,
      topicIds,
      imagesPlaceholders,
    }: UpdateWorkParams = req.body;
    const workImages: WorkImageItem[] = [];

    if (req.files) {
      if (Array.isArray(req.files)) {
        for (let i = 0; i < req.files.length; i++) {
          workImages.push({
            imagePlaceholder: imagesPlaceholders![i],
            image: req.files[i].buffer,
          });
        }
      } else if (typeof req.files === "object") {
        const files = req.files["images"];
        for (let i = 0; i < files.length; i++) {
          workImages.push({
            imagePlaceholder: imagesPlaceholders![i],
            image: files[i].buffer,
          });
        }
      }
    }

    await req.repo.Work.updateWork(
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
  next: NextFunction
) => {
  try {
    const result = await req.repo.Work.selectWork(BigInt(req.params.id));
    res.status(200).json(result ? serializeBigInt(result) : result);
  } catch (e) {
    next(e);
  }
};

export const getPopularWork = async (
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

    res
      .status(200)
      .json(
        serializeBigInt(
          await req.repo.Work.selectMostPopularWorks(topicId, pageSize, cursor)
        )
      );
  } catch (e) {
    next(e);
  }
};

export const getLatestWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    const works = await req.repo.Work.selectLatestWorksByAuthor(
      id,
      pageSize,
      lastCursor
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};
