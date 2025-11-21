import { Router } from "express";
import multer from "multer";
import {
  createWork,
  getLatestWork,
  getPopularWork,
  getWork,
  getWorksByTopic,
  getWorksOfFollowed,
  getWorksOfOneFollowed,
  searchWorks,
  updateWork,
} from "../../controllers/work/WorkController";
import type { PagingParams } from "../../controllers/PagingParams";
import { serializeBigInt } from "lib";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/work/new", upload.array("images", 10), createWork);
router.post("/work/update", upload.array("images", 10), updateWork);
router.get("/work/:id", getWork);
router.post("/work_popular", getPopularWork);
router.post("/work_latest", getLatestWork);
router.post("/work_followed", getWorksOfFollowed);
router.post("/work_followed_one", getWorksOfOneFollowed);
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
router.post("/work_search", searchWorks);

export default router;
