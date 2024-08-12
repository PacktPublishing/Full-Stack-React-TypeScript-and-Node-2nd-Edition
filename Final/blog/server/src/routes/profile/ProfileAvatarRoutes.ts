import { Express } from "express";
import { repo } from "../SharedData.js";

export function setProfileAvatarRoutes(app: Express) {
  app.get("/profile/avatar/:avatarId", async (req, res) => {
    try {
      const file = await repo.ProfileAvatar.selectProfileAvatar(
        BigInt(req.params.avatarId)
      );

      res.status(200).contentType("image/jpeg").send(file?.avatar);
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ error: "Internal server error, failed to get avatar" });
    }
  });
}
