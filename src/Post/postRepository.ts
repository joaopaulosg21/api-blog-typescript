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
}