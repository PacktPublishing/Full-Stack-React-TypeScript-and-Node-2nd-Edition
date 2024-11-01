import { Router } from "express";
import {
  createTopic,
  getAllTopics,
} from "../../controllers/TopicController.js";
import { authenticationHandler } from "../../middleware/Authenticate.js";

const router = Router();

router.post("/topic/new", authenticationHandler, createTopic);
router.get("/topic", getAllTopics);

export default router;
