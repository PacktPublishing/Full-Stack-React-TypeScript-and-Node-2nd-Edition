import express, { Express } from "express";
import { pinoHttpMiddleware } from "./lib/utils/Logger";
import profileRoutes from "./routes/Profile/ProfileRoutes";
import workRoutes from "./routes/Work/WorkRoutes";
import topicRoutes from "./routes/Topic/TopicRoutes";
import followRoutes from "./routes/Follow/FollowRoutes";
import workImageRoutes from "./routes/Work/WorkImageRoutes";
import workLikesRoutes from "./routes/Work/WorkLikesRoutes";
import workResponseRoutes from "./routes/Work/WorkResponseRoutes";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttpMiddleware);
app.use(profileRoutes);
app.use(workRoutes);
app.use(workImageRoutes);
app.use(workLikesRoutes);
app.use(workResponseRoutes);
app.use(topicRoutes);
app.use(followRoutes);

export default app;
