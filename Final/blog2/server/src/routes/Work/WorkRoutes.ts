import { Router } from "express";
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
} from "../../controllers/work/WorkController.js";
import multer from "multer";
import { authenticationHandler } from "../../middleware/Authenticate.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post(
  "/work/new",
  authenticationHandler,
  upload.array("images", 10),
  createWork
);
router.post(
  "/work/update",
  authenticationHandler,
  upload.array("images", 10),
  updateWork
);
router.get("/work/:id", getWork);
router.post("/work_popular", getPopularWork);
router.post("/work_latest", getLatestWork);
router.post("/work_followed", getWorksOfFollowed);
router.post("/work_followed_one", getWorksOfOneFollowed);
router.post("/work_topic", getWorksByTopic);
router.post("/work_search", searchWorks);

export default router;
