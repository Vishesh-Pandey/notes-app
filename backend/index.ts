import express from "express";
import { Request, Response } from "express";
import mainRouter from "./routes";

const PORT = 3000;

const app = express();
app.use(express.json());

app.use("/api/v1", mainRouter);

app.get("/test", (req: Request, res: Response) => {
  res.json({
    msg: "working",
  });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT : ${PORT}`);
});
