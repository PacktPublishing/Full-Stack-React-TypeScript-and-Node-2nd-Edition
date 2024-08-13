import { Router } from "express";
import { getAllTopics } from "../controllers/TopicController.js";

const router = Router();

router.get("/topic", getAllTopics);

export default router;
