//Aqui es donde se ejecuta todo.
//El orden de la importaciones afecta. 
import express from "express";
import "dotenv/config.js"//doten para poder utilizar variables de entorno 
import "./config/database.js"//este el archico que importamos desde database.js 
import cors from 'cors'
import morgan from "morgan";
import indexRouter from './router/index.js'
import not_found_handler from "./middlewares/not_found_handler.js";
import error_400 from "./middlewares/error_400.js";
import error_handler from "./middlewares/error_handler.js";


const server = express()

const PORT = process.env.PORT || 8080

const ready = ()=> console.log("server ready in port :"+PORT);

server.use(express.json())//permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({ extended: true }))//permite capturar consultas complejas
server.use(cors())//para permitir origenes cruzadas
server.use(morgan('dev'))//para registrar peticiones HTTP



//router
server.use('/api',indexRouter)
server.use(not_found_handler)
server.use(error_400)
server.use(error_handler)

server.listen(PORT,ready)



