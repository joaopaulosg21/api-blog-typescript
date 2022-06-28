import { app } from "./server";
import config from "./config";
const { port } = config;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
})
