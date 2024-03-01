import express from "express";
import { userRouter } from "./user";
import { noteRouter } from "./note";

const router = express.Router();

router.use("/user", userRouter);
router.use("/note", noteRouter);

const mainRouter = router;
export default mainRouter;
