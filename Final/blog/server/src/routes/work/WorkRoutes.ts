import { Express } from "express";
import { repo } from "../SharedData.js";
import { serializeBigInt } from "../../repository/lib/JsonUtils.js";
import { PAGE_SIZE } from "../../repository/lib/utils.js";
import { logger } from "../../lib/utils/Logger.js";

type PopularWorkParameter = {
  topicId: string | undefined;
  pageSize: number | undefined;
  cursor: string | undefined;
};

export function setWorkRoutes(app: Express) {
  app.get("/work/:id", async (req, res) => {
    try {
      res
        .status(200)
        .json(
          serializeBigInt(await repo.Work.selectWork(BigInt(req.params.id)))
        );
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ error: "Internal server error, failed to get work" });
    }
  });

  app.post("/work_popular", async (req, res) => {
    try {
      const { topicId, pageSize, cursor }: PopularWorkParameter = req.body;
      logger.info(
        "topicId, pageSize, cursor",
        req.body,
        topicId,
        pageSize,
        cursor
      );
      res
        .status(200)
        .json(
          serializeBigInt(
            await repo.Work.selectMostPopularWorks(
              topicId ? BigInt(topicId) : undefined,
              pageSize ? pageSize : undefined,
              cursor ? BigInt(cursor) : undefined
            )
          )
        );
    } catch (e) {
      logger.error("e", e);
      res
        .status(500)
        .json({ error: "Internval server error, get popular works failed" });
    }
  });

  app.get("/work_latest/:authorId/:cursor?", async (req, res) => {
    try {
      const works = await repo.Work.selectLatestWorksByAuthor(
        BigInt(req.params.authorId),
        PAGE_SIZE,
        req.params.cursor ? BigInt(req.params.cursor) : undefined
      );

      res.status(200).json(serializeBigInt(works));
    } catch (e) {
      res
        .status(500)
        .json({ error: "Internval server error, get popular works failed" });
    }
  });
}
