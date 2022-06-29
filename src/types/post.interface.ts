import { User } from "@prisma/client";

export interface post {
    id?:number;
    title:string;
    createdAt?:Date;
    content:string;
    published?:boolean;
    authorId:number;
}