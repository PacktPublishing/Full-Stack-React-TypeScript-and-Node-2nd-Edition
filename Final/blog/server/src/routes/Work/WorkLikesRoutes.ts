import { Router } from "express";
import {
  createWorkLike,
  getWorkLikesCount,
} from "../../controllers/work/WorkLikesController";
import { authenticationHandler } from "../../middleware/Authenticate";

const router = Router();

router.post("/work_like/new", authenticationHandler, createWorkLike);
router.get("/work_like/:workId", getWorkLikesCount);

export default router;
