import { PrismaClient } from "@prisma/client";
import { user } from "../types/user.interface";

export class UserRepository {
    private model:PrismaClient
    constructor(){
        this.model = new PrismaClient();
    }

    public async save(user:user):Promise<user>{
        return this.model.user.create({
            data:{
                name:user.name,
                email:user.email,
                password:user.password
            }
        });
    }

    public async returnEmail(email:string):Promise<user | null>{
        return this.model.user.findUnique({where:{email:email}});
    }

    public async login(email:string,password:string):Promise<user | null>{
        return this.model.user.findFirst({where:{email:email,password:password}});
    }
}