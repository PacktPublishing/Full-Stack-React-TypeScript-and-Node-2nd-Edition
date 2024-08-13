import { Router } from "express";
import {
  getLatestWork,
  getPopularWork,
  getWork,
  getWorkImage,
} from "../controllers/work/WorkController.js";

const router = Router();

router.get("/work/:id", getWork);
router.post("/work_popular", getPopularWork);
router.get("/work_latest/:authorId/:cursor?", getLatestWork);
router.get("/work_image/:workId/:placeholder", getWorkImage);

export default router;
