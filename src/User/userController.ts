import { UserService } from "./userService";
import { Request,Response } from "express";
import { user } from "../types/user.interface";
import { response } from "../types/response.interface";

export class UserController {
    private userService:UserService;
    constructor(){
        this.userService = new UserService();
    }

    public async newUserRoute(req:Request,res:Response):Promise<Response>{
        const user:user = req.body;
        const response:response = await this.userService.saveUser(user);
        return res.status(response.status).json(response.msg);
    }
    
    public async loginUserRoute(req:Request,res:Response):Promise<Response>{
        const email:string = req.body.email;
        const password:string = req.body.password;
        const response:response = await this.userService.loginUser(email,password);
        return res.status(response.status).json(response.msg);
    }
}