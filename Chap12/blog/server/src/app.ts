import express, { type Express } from "express";
import { pinoHttpMiddleware } from "./lib/utils/Logger";
// import profileRoutes from "./routes/Profile/ProfileRoutes";
import workRoutes from "./routes/work/WorkRoutes";
// import topicRoutes from "./routes/Topic/TopicRoutes";
// import followRoutes from "./routes/Follow/FollowRoutes";
// import workImageRoutes from "./routes/Work/WorkImageRoutes";
// import workLikesRoutes from "./routes/Work/WorkLikesRoutes";
// import workResponseRoutes from "./routes/Work/WorkResponseRoutes";
import cors from "cors";
import type { Repository } from "./repository/Repository";

export default class Api {
  app: Express;

  constructor(repo: Repository) {
    this.app = express();

    this.#setupMiddlewares(repo);
    this.#setupRoutes();
  }

  #setupMiddlewares(repo: Repository) {
    this.app.use((req, _res, next) => {
      req.repo = repo;
      next();
    });
    this.app.use(
      cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
      })
    );
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(pinoHttpMiddleware);
  }

  #setupRoutes() {
    // app.use(profileRoutes);
    this.app.use(workRoutes);
    // app.use(workImageRoutes);
    // app.use(workLikesRoutes);
    // app.use(workResponseRoutes);
    // app.use(topicRoutes);
    // app.use(followRoutes);
  }
}
