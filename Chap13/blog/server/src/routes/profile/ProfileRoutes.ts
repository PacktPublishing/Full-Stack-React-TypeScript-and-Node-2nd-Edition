import { Router } from "express";
import {
  createProfile,
  createProfileAvatar,
  getMostPopularAuthors,
  getProfile,
  getProfileAvatar,
  login,
  logout,
  updateProfile,
} from "../../controllers/ProfileController";
import multer from "multer";
import { authenticationHandler } from "../../middleware/AuthenticationHandler";
import { validate } from "../lib/Validation";
import { createProfileSchema } from "lib/dist/validation/ProfileSchema";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post(
  "/profile/avatar/new",
  authenticationHandler,
  upload.single("file"),
  createProfileAvatar
);
router.post("/profile/logout", authenticationHandler, logout);
router.post(
  "/profile/update",
  authenticationHandler,
  upload.single("file"),
  updateProfile
);

router.get("/profile/avatar/:avatarId", getProfileAvatar);
router.post("/profile/login", login);

router.post(
  "/profile/new",
  validate({ body: createProfileSchema }),
  upload.single("file"),
  createProfile
);
router.get("/profile/:profileId", getProfile);
router.get("/profile_popular", getMostPopularAuthors);

export default router;
