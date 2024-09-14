import { Router } from "express";
import {
  createTopic,
  getAllTopics,
} from "../../controllers/TopicController.js";

const router = Router();

router.post("/topic/new", createTopic);
router.get("/topic", getAllTopics);

export default router;
