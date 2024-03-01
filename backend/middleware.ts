import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type DecodedValue = jwt.JwtPayload & {
  username: string;
};

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader: string | string[] | undefined = req.headers.authorization;

  if (!authHeader || typeof authHeader !== "string") {
    return res.status(403).json({
      msg: "Invalid Authtoken",
    });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      msg: "not autherized",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = (await jwt.verify(
      token,
      process.env.JWT_SECRET || "invalid_secret"
    )) as DecodedValue;

    req.username = decoded.username;
    next();
  } catch (error) {
    return res.json({
      msg: "Internal Server Error",
    });
  }
};

export { authMiddleware as authMiddleware };
