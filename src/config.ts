import { config } from "dotenv";
config({
    path:".env"
})

export default {
    port:process.env.PORT,
    secret:process.env.SECRET
}