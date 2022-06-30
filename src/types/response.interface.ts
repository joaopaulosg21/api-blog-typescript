import { post } from "./post.interface";
import { user } from "./user.interface";

export interface response {
    status:number;
    msg:string | post[] | user[];
}