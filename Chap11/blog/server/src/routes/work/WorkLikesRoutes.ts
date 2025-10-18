import { Router } from "express";
import {
  createWorkLike,
  getWorkLikesCount,
} from "../../controllers/work/WorkLikesController";

const router = Router();

router.post("/work_like/new", createWorkLike);
router.get("/work_like/:workId", getWorkLikesCount);

export default router;
