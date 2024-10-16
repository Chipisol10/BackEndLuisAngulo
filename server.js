//Aqui es donde se ejecuta todo.
//El orden de la importaciones afecta. 
import express from "express";
import "dotenv/config.js"//doten para poder utilizar variables de entorno 
import "./config/database.js"//este el archico que importamos desde database.js 
import cors from 'cors'
import morgan from "morgan";
import indexRouter from './router/index.js'

const server = express()

const PORT = process.env.PORT || 8080

const ready = ()=> console.log("server ready in port :"+PORT);

server.use(express.json())//permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))

//router
server.use('/api',indexRouter)

server.listen(PORT,ready)



