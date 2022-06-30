import express from "express";
import { postRouter } from "./routes/postRoutes";
import { userRouter } from "./routes/userRoutes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users",userRouter);
app.use("/posts",postRouter);

export { app };