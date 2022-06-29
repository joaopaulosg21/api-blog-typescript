import { sign } from "jsonwebtoken";
import { response } from "../types/response.interface";
import { user } from "../types/user.interface";
import { verifyUser } from "../validators/userValidator";
import { UserRepository } from "./userRepository";
import config from "../config";

export class UserService {
    private userRepository:UserRepository
    constructor(){
        this.userRepository = new UserRepository();
    }

    public async saveUser(user:user):Promise<response>{
        try{
            await verifyUser(user);
            const email = await this.userRepository.returnEmail(user.email);
            if(email){
                return {status:406,msg:"Email ja cadastrado"};
            }
            await this.userRepository.save(user);
            return {status:201,msg:"Novo user cadastrado"};
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async loginUser(email:string,password:string):Promise<response>{
        const {secret} = config;
        try{
            const user = await this.userRepository.login(email,password);
            if(user && secret){
                const token = sign({"id":user.id},secret,{expiresIn:"1h"});
                return {status:200,msg:`${token}`};
            }else{
                return {status:404,msg:"Email ou password incorretos"};
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}