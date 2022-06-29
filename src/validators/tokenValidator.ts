import { NextFunction, Request, Response } from "express";
import config from "../config";
import { verify } from "jsonwebtoken";
const { secret } = config;
export function checkToken(req:Request,res:Response,next:NextFunction){
    if(req.headers["authorization"] && secret){
        const token = req.headers["authorization"].split(" ")[1];
        const decode = verify(token,secret);
        if(decode){
            next()
        }else{
            return res.status(500).json({error:"Token invalido"});
        }
    }else{
        return res.status(404).json({error:"Você não possui token de acesso"})
    }
}

export function returnId(token:string){
    return new Promise((resolve,reject)=>{
        if(secret){
            const decoded:any = verify(token,secret);
            if(decoded){
                resolve(decoded.id)
            }else{
                reject("Error")
            }
        }
    })
}