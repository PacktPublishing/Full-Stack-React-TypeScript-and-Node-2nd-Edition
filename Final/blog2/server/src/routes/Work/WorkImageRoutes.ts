import { Router } from "express";
import { getWorkImage } from "../../controllers/work/WorkImageController";
import { repo } from "../../repository/Repository";

const router = Router();

router.get("/work_image/:workId/:placeholder", (req, res, next) =>
  getWorkImage(req, res, next, repo)
);

export default router;
