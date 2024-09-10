import { Router } from "express";
import {
  createWork,
  getLatestWork,
  getPopularWork,
  getWork,
  getWorksOfFollowed,
  updateWork,
} from "../../controllers/work/WorkController.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/work/new", upload.array("images", 10), createWork);
router.post("/work/update", upload.array("images", 10), updateWork);
router.get("/work/:id", getWork);
router.post("/work_popular", getPopularWork);
router.post("/work_latest", getLatestWork);
router.post("/work_followed", getWorksOfFollowed);

export default router;
