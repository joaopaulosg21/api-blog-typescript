import { Prisma, PrismaClient } from "@prisma/client";
import { post } from "../types/post.interface";

export class PostRepository {
    private model:PrismaClient;
    constructor(){
        this.model = new PrismaClient();
    }

    public async save(post:post):Promise<post>{
        return this.model.post.create({
            data:{
                title:post.title,
                content:post.content,
                authorId:post.authorId
            }
        });
    }

    public async getAll():Promise<post[]>{
        return this.model.post.findMany({
            where:{published:true}
        });
    }

    public async publishPost(postId:number):Promise<post | null>{
        return this.model.post.update({
            where:{id:postId},
            data:{published:true}
        });
    }
}