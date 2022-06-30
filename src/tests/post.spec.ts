import request from "supertest";
import { app } from "../server";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjU2NTkwNjM0LCJleHAiOjE2NTY1OTQyMzR9._37lIbo4_ga58AEZYQf5KuHO1T1Sbx-jTdhineYfrnQ"
const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjU2NTkwMTk2LCJleHAiOjE2NTY1OTM3OTZ9.UiFoAPArN8VSkipWdDaNq0YiXdZR0moZqGc_3f0Qp94";
describe("Testes de rotas de Post",()=>{
    it("Teste para adicionar Post",async()=>{
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
    });

    it("Teste para publicar Post",async()=>{
        const response = await request(app)
        .put("/posts/PublishPost/3")
        .set({'authorization':`Bearer ${adminToken}`});
        expect(response.statusCode).toStrictEqual(200);
        expect(response.body).toEqual("Post atualizado!")
    })
});

describe("Testes de erros nas rotas de Post",()=>{
    it("Teste para adicionar post sem token de acesso",async()=>{
        const response = await request(app)
        .post("/posts/new")
        .send({title:"Teste de novo post sem token",content:"Teste de content sem token de acesso"});
        expect(response.statusCode).toStrictEqual(404);
        expect(response.body.error).toEqual("Você não possui token de acesso");
    });

    it("Teste para publicar post sem ser admin",async()=>{
        const response = await request(app)
        .put("/posts/PublishPost/3")
        .set({'authorization':`Bearer ${token}`});
        expect(response.statusCode).toStrictEqual(401);
        expect(response.body).toEqual("Usuario não tem autorização para publicar o post!");
    });

    it("Teste para publicar post que não existe",async()=>{
        const response = await request(app)
        .put("/posts/PublishPost/9999")
        .set({'authorization':`Bearer ${adminToken}`});
        expect(response.statusCode).toStrictEqual(500);
    })
});