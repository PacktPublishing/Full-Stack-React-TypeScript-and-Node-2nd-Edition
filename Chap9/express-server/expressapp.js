import express from "express";

const router = express.Router();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("First middleware.");
  next();
});

app.use(router);

router.get("/api/v1/users/:id", (req, res, next) => {
  const users = [
    {
      id: 1,
      username: "tom",
    },

    {
      id: 2,
      username: "jon",
    },

    {
      id: 3,
      username: "linda",
    },
  ];

  console.log("id", req.params.id);

  const user = users.find((usr) => usr.id == req.params.id);

  res.send(`User ${user?.username}`);
});

router.post("/api/v1/groups", (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: "Admins",
    },

    {
      id: 2,
      groupname: "Users",
    },

    {
      id: 3,
      groupname: "Employees",
    },
  ];

  const group = groups.find((grp) => grp.id == req.body.groupid);

  res.send(`Group ${group.groupname}`);
});

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});
