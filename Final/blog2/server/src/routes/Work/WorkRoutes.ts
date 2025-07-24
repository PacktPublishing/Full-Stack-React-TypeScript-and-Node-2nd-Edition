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
import { authorizeHandler } from "../../middleware/AuthorizeHandler.js";
import { repo } from "../../repository/Repository.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post(
  "/work/new",
  authorizeHandler,
  upload.array("images", 10),
  (req, res, next) => createWork(req, res, next, repo)
);
router.post(
  "/work/update",
  authorizeHandler,
  upload.array("images", 10),
  (req, res, next) => updateWork(req, res, next, repo)
);
router.get("/work/:id", (req, res, next) => getWork(req, res, next, repo));
router.post("/work_popular", (req, res, next) =>
  getPopularWork(req, res, next, repo)
);
router.post("/work_latest", (req, res, next) =>
  getLatestWork(req, res, next, repo)
);
router.post("/work_followed", (req, res, next) =>
  getWorksOfFollowed(req, res, next, repo)
);
router.post("/work_followed_one", (req, res, next) =>
  getWorksOfOneFollowed(req, res, next, repo)
);
router.post("/work_topic", (req, res, next) =>
  getWorksByTopic(req, res, next, repo)
);
router.post("/work_search", (req, res, next) =>
  searchWorks(req, res, next, repo)
);

export default router;
