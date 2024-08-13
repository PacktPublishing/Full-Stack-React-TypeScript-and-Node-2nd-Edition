import { Router } from "express";
import {
  getMostPopularAuthors,
  getProfileAvatar,
} from "../controllers/ProfileController";

const router = Router();

router.get("/profile/avatar/:avatarId", getProfileAvatar);
router.post("/profile/popular", getMostPopularAuthors);

export default router;
