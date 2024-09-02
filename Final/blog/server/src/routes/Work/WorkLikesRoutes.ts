import { Router } from "express";
import { createWorkLike } from "../../controllers/work/WorkLikesController";

const router = Router();

router.post("/work_like/new", createWorkLike);

export default router;
