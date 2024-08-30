import express, { Express } from "express";
import { pinoHttpMiddleware } from "./lib/utils/Logger";
import profileRoutes from "./routes/Profile/ProfileRoutes";
import workRoutes from "./routes/WorkRoutes";
import topicRoutes from "./routes/Topic/TopicRoutes";
import followRoutes from "./routes/Follow/FollowRoutes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttpMiddleware);
app.use(profileRoutes);
app.use(workRoutes);
app.use(topicRoutes);
app.use(followRoutes);

export default app;
