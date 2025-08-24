import dotenv from "dotenv";
import app from "./app.js";
import { repo } from "./repository/Repository.js";

dotenv.config();
const port = process.env.PORT;

app.use((req, _res) => {
  req.repo = repo;
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
