import request from "supertest";
import { app } from "../server";

describe("Testes de rotas de Post",()=>{
    it("Teste para adicionar Post",async()=>{
        const response = await request(app)
        .post("/posts/new")
        .send({title:"Teste de novo post",content:"Teste de content",authorId:6});
        expect(response.statusCode).toStrictEqual(201);
        expect(response.body).toEqual("Novo post cadastrado");
    })
})