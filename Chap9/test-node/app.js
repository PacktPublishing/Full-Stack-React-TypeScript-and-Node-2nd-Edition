import express from "express";
import router from "./routes.js";

const app = express();

app.use(express.json());
app.use(router);

export const server = app.listen(8000, () => {
  console.log("server started");
});

export default app;
