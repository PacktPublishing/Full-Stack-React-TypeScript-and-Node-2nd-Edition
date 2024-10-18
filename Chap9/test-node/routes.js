import { Router } from "express";

const users = [
  {
    id: 1,
    username: "jon",
    age: 25,
  },
  {
    id: 2,
    username: "dave",
    age: 35,
  },
  {
    id: 3,
    username: "lin",
    age: 45,
  },
];

const router = Router();
router.get("/api/v1/users", async (req, res, next) => {
  res.status(200).json(users);
});

router.post("/api/v1/newuser", async (req, res, next) => {
  try {
    console.log("body", req.body);
    if (req.body.id > maxId()) {
      throw new Error("id is invalid", id);
    }

    users.push(req.body);

    res.status(200).json({ id: req.body.id });
  } catch (e) {
    next(e);
  }
});
export default router;

function maxId() {
  Math.max(...users.map((usr) => usr.id));
}
