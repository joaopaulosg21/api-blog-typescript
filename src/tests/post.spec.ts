import request from "supertest";
import { app } from "../server";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjU2NTQ4NTI4LCJleHAiOjE2NTY1NTIxMjh9.yCbPljf4VMavKmkXoVDFhtgzPeOCk94z3qxfUhWWEh4"
describe("Testes de rotas de Post",()=>{
    test("Teste para adicionar Post",async()=>{
        const response = await request(app)
        .post("/posts/new")
        .set({'authorization':`Bearer ${token}`})
        .send({title:"Teste de novo post",content:"Teste de content"})
        expect(response.statusCode).toStrictEqual(201);
        expect(response.body).toEqual("Novo post cadastrado");
    });

    it("Teste para ver todos os Posts",async()=>{
        const response = await request(app)
        .get("/posts/");
        expect(response.statusCode).toStrictEqual(200);
        expect(response.body.length).toBeGreaterThan(0);
    })
})