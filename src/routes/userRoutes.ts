import { Router } from "express";
import { UserController } from "../User/userController";
const user = new UserController();
const userRouter = Router();

userRouter.post("/new",(req,res)=>{
    user.newUserRoute(req,res)
});

export { userRouter };