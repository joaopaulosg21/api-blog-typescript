import { response } from "../types/response.interface";
import { user } from "../types/user.interface";
import { UserRepository } from "./userRepository";

export class UserService {
    private userRepository:UserRepository
    constructor(){
        this.userRepository = new UserRepository();
    }

    public async saveUser(user:user):Promise<response>{
        try{
            await this.userRepository.save(user);
            return {status:201,msg:"Novo user cadastrado"};
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}