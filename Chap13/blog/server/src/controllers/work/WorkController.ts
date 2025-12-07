import type { NextFunction, Request, Response } from "express";
import { serializeBigInt } from "lib";
import type {
  CreateWorkParams,
  UpdateWorkParams,
} from "../../routes/work/WorkModels";
import type { WorkImageItem } from "../../repository/work/WorkImage";
import type {
  PagingParams,
  PopularWorkParams,
} from "../../routes/PagingParams";

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
    const { topicId, pageSize, lastCursor }: PopularWorkParams = req.body;

    res
      .status(200)
      .json(
        serializeBigInt(
          await req.repo.Work.selectMostPopularWorks(
            topicId,
            pageSize,
            lastCursor
          )
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

export const getWorksOfFollowed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    // Why are these parameters cast to bigint, when our other functions don't need that?
    // selectWorksOfFollowed is a call to raw SQL, which requires exact type matching.
    // Other functions rely on Prisma to do the type casting for us.
    const works = await req.repo.Work.selectWorksOfFollowed(
      BigInt(id),
      pageSize,
      lastCursor ? BigInt(lastCursor) : undefined
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const getWorksOfOneFollowed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;

    // Why are these parameters cast to bigint, when our other functions don't need that?
    // selectWorksOfFollowed is a call to raw SQL, which requires exact type matching.
    // Other functions rely on Prisma to do the type casting for us.
    const works = await req.repo.Work.selectWorksOfOneFollowed(
      BigInt(id),
      pageSize,
      lastCursor ? BigInt(lastCursor) : undefined
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const getWorksByTopic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    const works = await req.repo.Work.selectWorksByTopic(
      id,
      pageSize,
      lastCursor
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};

export const searchWorks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      searchTxt,
      pageSize,
      lastCursor,
    }: { searchTxt: string; pageSize: number; lastCursor: bigint } = req.body;
    const works = await req.repo.Work.searchWorks(
      searchTxt,
      pageSize,
      lastCursor
    );

    res.status(200).json(serializeBigInt(works));
  } catch (e) {
    next(e);
  }
};
