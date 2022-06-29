import express from "express";
import { postRouter } from "./routes/postRoutes";
import { userRouter } from "./routes/userRoutes";
const app = express();

app.use(express.json());
app.use("/users",userRouter);
app.use("/posts",postRouter);

export { app };