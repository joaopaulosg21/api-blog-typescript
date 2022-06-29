import { Router } from "express";
import { PostController } from "../Post/postController";
const post = new PostController();
const postRouter = Router();

postRouter.post("/new",(req,res)=>{
    post.newPostRoute(req,res);
})

export { postRouter };