import express from "express";
import { PrismaClient } from "@prisma/client";
import zod from "zod";

import { authMiddleware } from "../middleware";

const prisma = new PrismaClient();

const router = express.Router();

const addNoteSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

router.post("/add", authMiddleware, async (req, res) => {
  try {
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
  } catch (error) {
    res.json({
      msg: "Internal Server Error",
    });
  }
});

router.get("/all", authMiddleware, async (req, res) => {
  try {
    const notes = await prisma.note.findMany({
      where: {
        username: req.username,
      },
    });
    res.json(notes);
  } catch (error) {
    res.status(404).json({
      msg: "Internal Server error",
    });
  }
});

export { router as noteRouter };
