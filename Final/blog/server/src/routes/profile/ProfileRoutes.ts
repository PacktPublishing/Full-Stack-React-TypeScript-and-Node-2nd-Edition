import { Express } from "express";
import { repo } from "../SharedData.js";
import { serializeBigInt } from "../../repository/lib/JsonUtils.js";

export function setProfileRoutes(app: Express) {
  app.post("/profile/popular", async (req, res) => {
    try {
      const authors = await repo.Profile.selectMostPopularAuthors();
      const serializable = serializeBigInt(authors);
      res.status(200).json(serializable);
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ error: "Internal server error, get popular authors failed" });
    }
  });
}
