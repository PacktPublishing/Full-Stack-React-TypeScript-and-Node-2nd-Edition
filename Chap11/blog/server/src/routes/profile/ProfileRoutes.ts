import { Router } from "express";
import {
  createProfile,
  createProfileAvatar,
  getMostPopularAuthors,
  getProfile,
  getProfileAvatar,
  updateProfile,
} from "../../controllers/ProfileController";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/profile/avatar/new", upload.single("file"), createProfileAvatar);
router.get("/profile/avatar/:avatarId", getProfileAvatar);
router.post("/profile/new", upload.single("file"), createProfile);
router.get("/profile/:profileId", getProfile);
router.post("/profile/update", upload.single("file"), updateProfile);
router.get("/profile_popular", getMostPopularAuthors);

export default router;
