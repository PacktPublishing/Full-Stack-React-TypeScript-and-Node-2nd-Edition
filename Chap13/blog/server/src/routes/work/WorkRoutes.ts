import { Router } from "express";
import multer from "multer";
import type { CreateWorkParams, UpdateWorkParams } from "./WorkModels";
import type { WorkImageItem } from "../../repository/work/WorkImage";
import { serializeBigInt } from "lib";
import type { PagingParams, PopularWorkParams } from "../PagingParams";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/work/new", upload.array("images", 10), async (req, res, next) => {
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
});

router.post(
  "/work/update",
  upload.array("images", 10),
  async (req, res, next) => {
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
  }
);

router.get("/work/:id", async (req, res, next) => {
  try {
    const result = await req.repo.Work.selectWork(BigInt(req.params.id));
    res.status(200).json(result ? serializeBigInt(result) : result);
  } catch (e) {
    next(e);
  }
});

router.post("/work_popular", async (req, res, next) => {
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
});

router.post("/work_latest", async (req, res, next) => {
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
});

router.post("/work_followed", async (req, res, next) => {
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
});

router.post("/work_followed_one", async (req, res, next) => {
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
});

router.post("/work_topic", async (req, res, next) => {
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
});

router.post("/work_search", async (req, res, next) => {
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
});

export default router;
