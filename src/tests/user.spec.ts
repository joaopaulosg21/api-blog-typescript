import request from "supertest";
import { app } from "../server";

describe("Testes de rotas de user",()=>{
    it("Teste para adicionar User",async()=>{
        const response = await request(app)
        .post("/users/new")
        .send({name:"teste",email:"teste@email.com",password:"123"})
        expect(response.statusCode).toStrictEqual(201);
        expect(response.body).toEqual("Novo user cadastrado")
    });
})
