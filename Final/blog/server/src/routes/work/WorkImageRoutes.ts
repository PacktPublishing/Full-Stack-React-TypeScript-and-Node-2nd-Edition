import { Express } from "express";
import { repo } from "../SharedData.js";

export function setWorkImageRoutes(app: Express) {
  app.get("/work_image/:workId/:placeholder", async (req, res) => {
    try {
      const workId = req.params.workId;
      const placeholder = req.params.placeholder;

      const image = await repo.WorkImage.selectWorkImage(
        BigInt(workId),
        placeholder
      );

      res.contentType("image/jpeg");
      res.status(200).send(image?.image);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Internal server error, image not found" });
    }
  });
}
