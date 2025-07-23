import { Router } from "express";
import {
  createProfile,
  createProfileAvatar,
  getMostPopularAuthors,
  getProfile,
  getProfileAvatar,
  login,
  updateProfile,
} from "../../controllers/ProfileController";
import multer from "multer";
import { authenticationHandler } from "../../middleware/Authenticate";
import { repo } from "../../repository/Repository";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post(
  "/profile/avatar/new",
  authenticationHandler,
  upload.single("file"),
  (req, res, next) => createProfileAvatar(req, res, next, repo)
);
router.get("/profile/avatar/:avatarId", (req, res, next) =>
  getProfileAvatar(req, res, next, repo)
);
router.post("/profile/login", (req, res, next) => login(req, res, next, repo));
router.post("/profile/new", upload.single("file"), (req, res, next) =>
  createProfile(req, res, next, repo)
);
router.get("/profile/:profileId", (req, res, next) =>
  getProfile(req, res, next, repo)
);
router.post(
  "/profile/update",
  authenticationHandler,
  upload.single("file"),
  (req, res, next) => updateProfile(req, res, next, repo)
);
router.get("/profile_popular", (req, res, next) =>
  getMostPopularAuthors(req, res, next, repo)
);

export default router;
