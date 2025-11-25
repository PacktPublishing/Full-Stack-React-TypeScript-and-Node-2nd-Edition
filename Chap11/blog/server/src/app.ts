import express, { type Express } from "express";
// import { pinoHttpMiddleware } from "./lib/utils/Logger";
import workRoutes from "./routes/work/WorkRoutes";
import cors from "cors";
import type { Repository } from "./repository/Repository";

export default class Api {
  #app: Express;
  get App() {
    return this.#app;
  }

  constructor(repo: Repository) {
    this.#app = express();

    this.#setupMiddlewares(repo);
    this.#setupRoutes();
  }

  #setupMiddlewares(repo: Repository) {
    this.#app.use((req, _res, next) => {
      req.repo = repo;
      next();
    });
    this.#app.use(
      cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
      })
    );
    this.#app.use(express.json({ limit: "10mb" }));
    this.#app.use(express.urlencoded({ extended: true }));
    // this.#app.use(pinoHttpMiddleware);
  }

  #setupRoutes() {
    this.#app.use(workRoutes);
  }
}
