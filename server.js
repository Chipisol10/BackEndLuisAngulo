import express from "express";
import "dotenv/config.js"
const server = express()

const PORT = process.env.PORT || 8080

const ready = ()=> console.log("server ready in port :"+PORT);

server.get("/",(resquest,response)=>{
    response.send('Hola mundo en Express!')
})

server.get("/saludo",(resquest,response)=>{
    response.send('Hola Bienvenido al Mundo de Express!')
})

server.listen(PORT,ready)


