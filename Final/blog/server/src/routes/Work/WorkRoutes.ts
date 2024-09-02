import { Router } from "express";
import {
  getLatestWork,
  getPopularWork,
  getWork,
} from "../../controllers/work/WorkController.js";

const router = Router();

router.get("/work/:id", getWork);
router.post("/work_popular", getPopularWork);
router.get("/work_latest/:authorId/:cursor?", getLatestWork);

export default router;
