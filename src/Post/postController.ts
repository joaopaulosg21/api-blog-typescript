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
        const response:response = await this.postService.savePost(post);
        return res.status(response.status).json(response.msg);
    }
}