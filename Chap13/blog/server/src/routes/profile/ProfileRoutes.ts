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
import { serializeBigInt } from "lib";
import { OctetType } from "../../controllers/lib/Constants";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post(
  "/profile/avatar/new",
  upload.single("file"),
  async (req, res, next) => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "No file provided" });
        return;
      }

      const file = await req.repo.ProfileAvatar.insertProfileAvatar(
        req.file.buffer
      );
      res.status(200).json(serializeBigInt(file?.id));
    } catch (e) {
      next(e);
    }
  }
);

router.get("/profile/avatar/:avatarId", async (req, res, next) => {
  try {
    const file = await req.repo.ProfileAvatar.selectProfileAvatar(
      BigInt(req.params.avatarId)
    );

    res.status(200).contentType(OctetType).send(file?.avatar);
  } catch (e) {
    next(e);
  }
});

router.post("/profile/new", upload.single("file"), createProfile);
router.get("/profile/:profileId", getProfile);
router.post("/profile/update", upload.single("file"), updateProfile);
router.get("/profile_popular", getMostPopularAuthors);

export default router;
