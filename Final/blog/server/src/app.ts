import express, { Express } from "express";
import { pinoHttpMiddleware } from "./lib/utils/Logger";
import profileRoutes from "./routes/Profile/ProfileRoutes";
import workRoutes from "./routes/Work/WorkRoutes";
import topicRoutes from "./routes/Topic/TopicRoutes";
import followRoutes from "./routes/Follow/FollowRoutes";
import workImageRoutes from "./routes/Work/WorkImageRoutes";
import workLikesRoutes from "./routes/Work/WorkLikesRoutes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttpMiddleware);
app.use(profileRoutes);
app.use(workRoutes);
app.use(workImageRoutes);
app.use(workLikesRoutes);
app.use(topicRoutes);
app.use(followRoutes);

export default app;
