import { Express } from "express";
import { repo } from "../SharedData.js";
import { serializeBigInt } from "../../repository/lib/JsonUtils.js";

export function setTopicRoutes(app: Express) {
  app.get("/topic", async (req, res) => {
    try {
      res.status(200).json(serializeBigInt(await repo.Topic.selectAllTopics()));
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ error: "Internal server error, failed to get all topics" });
    }
  });
}
