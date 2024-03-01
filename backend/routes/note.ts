import { PrismaClient } from "@prisma/client";
import express from "express";
import zod from "zod";
import { authMiddleware } from "../middleware";

const prisma = new PrismaClient();

const router = express.Router();

// add note
// get notes

const addNoteSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

router.post("/add", authMiddleware, async (req, res) => {
  const { success } = addNoteSchema.safeParse(req.body);

  if (!success) {
    return res.json({
      msg: "Invalid Input",
    });
  }

  await prisma.note.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      username: req.username || "invalid",
    },
  });

  res.status(200).json({
    msg: "Note added successfully",
  });
});

export { router as noteRouter };
