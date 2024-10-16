import express from "express";

const router = express.Router();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("First middleware.");

  throw new Error("A failure occurred!");
});

app.use(router);

router.get("/a", (req, res, next) => {
  res.send("Hello this is route a");
});

router.post("/c", (req, res, next) => {
  res.send(`Hello this is route c. Message is ${req.body.message}`);
});

app.use((err, req, res, next) => {
  res.status(500).send(`Error: ${err.message}`);
});

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});
