import express, { type Express } from "express";
import { pinoHttpMiddleware } from "./lib/utils/Logger";
import profileRoutes from "./routes/profile/ProfileRoutes";
import workRoutes from "./routes/work/WorkRoutes";
import topicRoutes from "./routes/topic/TopicRoutes";
import followRoutes from "./routes/follow/FollowRoutes";
import workImageRoutes from "./routes/work/WorkImageRoutes";
import workLikesRoutes from "./routes/work/WorkLikesRoutes";
import workResponseRoutes from "./routes/work/WorkResponseRoutes";
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
