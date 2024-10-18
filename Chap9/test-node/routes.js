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
    if (req.body.id <= maxId()) {
      res.status(500).json({ message: "id is invalid" });
      return;
    }

    users.push(req.body);

    res.status(200).json({ id: req.body.id });
  } catch (e) {
    next(e);
  }
});
export default router;

export function maxId() {
  return Math.max(...users.map((usr) => usr.id));
}
