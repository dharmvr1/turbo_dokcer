import { prisma } from "@repo/db/client";
import express from "express";

const app = express();
app.use(express.json())
app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  if (!users) {
    res.status(500).json({
      message: "not found",
    });
  }
  res.status(200).json({
    users,
  });
});

app.post("/", async (req, res) => {
  if(!req.body){
    res.status(400).json({message:"req.body"})
    return
  }
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(500).json({
      message: "not found",
    });
    return
  }
  const new_user = await prisma.user.create({
    data: {
      name,
      password,
    },
  });
  if (!new_user) {
    res.status(500).json({
      message: "not found",
    });
    return
  }
  res.status(200).json({
    new_user,
  });
});

app.listen(8000);
