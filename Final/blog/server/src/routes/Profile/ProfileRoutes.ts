import { Router } from "express";
import {
  createProfileAvatar,
  getMostPopularAuthors,
  getProfileAvatar,
} from "../../controllers/ProfileController";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/profile/avatar/new", upload.single("file"), createProfileAvatar);
router.get("/profile/avatar/:avatarId", getProfileAvatar);
router.post("/profile/popular", getMostPopularAuthors);

export default router;
