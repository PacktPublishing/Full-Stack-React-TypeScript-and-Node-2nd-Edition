import { Router } from "express";
import {
  createTopic,
  getAllTopics,
} from "../../controllers/TopicController.js";
import { authorizeHandler } from "../../middleware/AuthorizeHandler.js";
import { repo } from "../../repository/Repository.js";

const router = Router();

router.post("/topic/new", authorizeHandler, (req, res, next) =>
  createTopic(req, res, next, repo)
);
router.get("/topic", (req, res, next) => getAllTopics(req, res, next, repo));

export default router;
