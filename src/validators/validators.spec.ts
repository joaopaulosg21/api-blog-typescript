import { verifyUser } from "./userValidator";

describe("Testes para verifyUser",()=>{
    it("teste ok",async()=>{
        const data = {
            name:"teste",
            email:"teste",
            password:"teste"
        };
        const response = await verifyUser(data);
        expect(response).toEqual(true);
    });

    it("Teste de erro",async()=>{
        const data = {
            name:"teste",
        }
        try{
            await verifyUser(data);
        }catch(e){
            expect(e).toEqual("User não possui todos os campos")
        }
    })
})