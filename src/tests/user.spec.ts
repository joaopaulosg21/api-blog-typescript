import request from "supertest";
import { app } from "../server";
const num = Math.floor(Math.random() * 1000);

describe("Testes de rotas de user",()=>{
    it("Teste para adicionar User",async()=>{
        const response = await request(app)
        .post("/users/new")
        .send({name:"teste",email:`teste${num}@email.com`,password:"123"})
        expect(response.statusCode).toStrictEqual(201);
        expect(response.body).toEqual("Novo user cadastrado")
    });
})

describe("Testes para erros nas rotas de User",()=>{
    it("Erro ao adicionar user sem todos os campos",async()=>{
        const response = await request(app)
        .post("/users/new")
        .send({name:"teste",email:`teste${num}@email.com`});
        expect(response.statusCode).toStrictEqual(500);
        expect(response.body).toEqual("User não possui todos os campos")
    });

    it("Erro ao adicionar user com o email ja cadastrado",async()=>{
        const response = await request(app)
        .post("/users/new")
        .send({name:"teste",email:`teste@email.com`,password:"123"});
        expect(response.statusCode).toStrictEqual(406);
        expect(response.body).toEqual("Email ja cadastrado");
    })
})