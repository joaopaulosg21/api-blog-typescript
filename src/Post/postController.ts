import { PostService } from "./postService";
import { Request,Response } from "express";
import { post } from "../types/post.interface";
import { response } from "../types/response.interface";

export class PostController {
    private postService:PostService;
    constructor(){
        this.postService = new PostService()
    }

    public async newPostRoute(req:Request,res:Response):Promise<Response>{
        const post:post = req.body;
        const token:any = req.headers["authorization"]?.split(" ")[1];
        const response:response = await this.postService.savePost(post,token);
        return res.status(response.status).json(response.msg);
    }

    public async getAllPostsRoute(req:Request,res:Response):Promise<Response>{
        const response:response = await this.postService.getAllPosts();
        return res.status(response.status).json(response.msg);
    }

    public async publishPostRoute(req:Request,res:Response):Promise<Response>{
        const postId:number = Number(req.params.id);
        const token:any = req.headers["authorization"]?.split(" ")[1];
        const response:response = await this.postService.publishPost(postId,token);
        return res.status(response.status).json(response.msg);
    }

    public async notPublishedPostsRoute(req:Request,res:Response):Promise<Response>{
        const token:any = req.headers["authorization"]?.split(" ")[1];
        const response:response = await this.postService.notPublishedPosts(token);
        return res.status(response.status).json(response.msg);
    }
}