import { Router } from "express";
import { createTopic, getAllTopics } from "../../controllers/TopicController";
import { authenticationHandler } from "../../middleware/AuthenticationHandler";

const router = Router();

router.post("/topic/new", authenticationHandler, createTopic);
router.get("/topic", getAllTopics);

export default router;
