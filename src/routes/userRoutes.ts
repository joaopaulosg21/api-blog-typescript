import { Router } from "express";
import { UserController } from "../User/userController";
const user = new UserController();
const userRouter = Router();

userRouter.post("/new",(req,res)=>{
    user.newUserRoute(req,res)
});

userRouter.post("/login",(req,res)=>{
    user.loginUserRoute(req,res);
});

export { userRouter };