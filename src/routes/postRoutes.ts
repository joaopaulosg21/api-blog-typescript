import { Router } from "express";
import { PostController } from "../Post/postController";
import { checkToken } from "../validators/tokenValidator";
const post = new PostController();
const postRouter = Router();

postRouter.post("/new",checkToken,(req,res)=>{
    post.newPostRoute(req,res);
})

export { postRouter };