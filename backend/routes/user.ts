import zod from "zod";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

const loginSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { success } = await signupSchema.safeParse(req.body);
    if (!success) {
      return res.json({
        msg: "Invalid Input",
      });
    }

    const user = await prisma.user.findFirst({
      where: { username: req.body.username },
    });
    if (user !== null) {
      return res.json({
        msg: "username not available",
      });
    }

    // create new user in database
    await prisma.user.create({
      data: { username: req.body.username, password: req.body.password },
    });

    return res.json({
      msg: "Signup Successful",
    });
  } catch (error) {
    res.json({
      msg: "Internal Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { success } = loginSchema.safeParse(req.body);

    if (!success) {
      return res.json({
        msg: "Invalid Input",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });

    if (user === null) {
      return res.json({
        msg: "Incorrect Credentials",
      });
    } else {
      const token = jwt.sign(
        { username: req.body.username },
        process.env.JWT_SECRET || "invalid_secret"
      );
      return res.json(token);
    }
  } catch (error) {
    res.json({
      msg: "Internal Server Error",
    });
  }
});

export { router as userRouter };
