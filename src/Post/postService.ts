import { post } from "../types/post.interface";
import { response } from "../types/response.interface";
import { PostRepository } from "./postRepository";

export class PostService {
    private postRepository:PostRepository;
    constructor(){
        this.postRepository = new PostRepository();
    }

    public async savePost(post:post):Promise<response>{
        try{
            await this.postRepository.save(post);
            return {status:201,msg:"Novo post cadastrado"};
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}