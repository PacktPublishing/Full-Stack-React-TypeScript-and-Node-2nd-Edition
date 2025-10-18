import { Router } from "express";
import {
  createFollow,
  getFollowed,
  getFollowedCount,
  getFollowers,
  getFollowersCount,
} from "../../controllers/follow/FollowController";

const router = Router();

router.post("/follow/new", createFollow);
router.post("/follow/followers", getFollowers);
router.get("/follow/followers/count/:followedId", getFollowersCount);
router.post("/follow/followed", getFollowed);
router.get("/follow/followed/count/:followerId", getFollowedCount);

export default router;
