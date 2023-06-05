"use strict";
//Creando servidor mediante node.js
/*
const http = require("http");

const server = http.createServer((req,res)=>{
    user = {
        user:"Elian",
        email:"elianmoreira@outlook.com"
    }
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(user));
    res.end()
})

server.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");
*/
//Creando sevidor con express
const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>Game of Thrones</h1>")
})

app.get('/resumen', (req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
  });

app.get('/personajes',(req,res)=>{
    res.send("Casa Stark: Sansa Stark, Aria Stark, Brandon Stark, Rickon Stark")
})

app.use((req,res)=>{
    res.status(404).send("Error 404 - Página no encontrada")
})

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');