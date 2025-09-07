import { Router } from "express";
import { getWorkImage } from "../../controllers/work/WorkImageController";

const router = Router();

router.get("/work_image/:workId/:placeholder", getWorkImage);

export default router;
