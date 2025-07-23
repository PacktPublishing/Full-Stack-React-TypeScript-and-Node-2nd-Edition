import { Router } from "express";
import {
  createWorkLike,
  getWorkLikesCount,
} from "../../controllers/work/WorkLikesController";
import { authenticationHandler } from "../../middleware/Authenticate";
import { repo } from "../../repository/Repository";

const router = Router();

router.post("/work_like/new", authenticationHandler, (req, res, next) =>
  createWorkLike(req, res, next, repo)
);
router.get("/work_like/:workId", (req, res, next) =>
  getWorkLikesCount(req, res, next, repo)
);

export default router;
