import express, { Request, Response } from "express";
import mainRouter from "./routes";
import cors from "cors";
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", mainRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "notes app",
  });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT : ${PORT}`);
});
