import { Router } from "express";
import { PostController } from "../Post/postController";
import { checkToken } from "../validators/tokenValidator";
const post = new PostController();
const postRouter = Router();

postRouter.post("/new",checkToken,(req,res)=>{
    post.newPostRoute(req,res);
});

postRouter.get("/",(req,res)=>{
    post.getAllPostsRoute(req,res);
});

postRouter.put("/publishPost/:id",checkToken,(req,res)=>{
    post.publishPostRoute(req,res);
});

postRouter.get("/notPublishedPosts/",checkToken,(req,res)=>{
    post.notPublishedPostsRoute(req,res);
});

export { postRouter };