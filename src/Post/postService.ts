import { post } from "../types/post.interface";
import { response } from "../types/response.interface";
import { UserRepository } from "../User/userRepository";
import { returnId } from "../validators/tokenValidator";
import { PostRepository } from "./postRepository";

export class PostService {
    private postRepository:PostRepository;
    private userRepository:UserRepository;
    constructor(){
        this.postRepository = new PostRepository();
        this.userRepository = new UserRepository();
    }

    public async savePost(post:post,token:string):Promise<response>{
        try{
            const id = await returnId(token);
            post.authorId = Number(id);
            await this.postRepository.save(post);
            return {status:201,msg:"Novo post cadastrado"};
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async getAllPosts():Promise<response>{
        try{
            const posts:post[] = await this.postRepository.getAll();
            return {status:200,msg:posts}
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async publishPost(postId:number,token:string):Promise<response>{
        try{
            const id = await returnId(token);
            const user = await this.userRepository.returnUser(Number(id));
            if(user && user.role == "admin"){
                await this.postRepository.publishPost(postId);
                return {status:200,msg:"Post atualizado!"};
            }else{
                return {status:401,msg:"Usuario não tem autorização para publicar o post!"}
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}