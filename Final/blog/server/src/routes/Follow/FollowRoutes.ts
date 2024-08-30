import { Router } from "express";
import {
  createFollow,
  getFollowed,
  getFollowers,
} from "../../controllers/follow/FollowController";

const router = Router();

router.post("/follow", createFollow);
router.post("/follow/followers", getFollowers);
router.post("/follow/followed", getFollowed);

export default router;
