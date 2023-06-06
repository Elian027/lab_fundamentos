const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Erick",
            "apellido":"Santillan",
            "edad":21
        },
        {
            "nombre":"Pablo",
            "apellido":"Uchuari",
            "edad":24
        },
        {
            "nombre":"Erick",
            "apellido":"Palomo"
        },
        {
            "nombre":"DIlan",
            "apellido":"Flores"
        },
        {
            "nombre":"Mateo",
            "apellido":"Congo",
            "edad":22
        },
        {
            "nombre":"Elian",
            "apellido":"Moreira",
            "edad":20
        }
    ])
})

app.get('/productos', (req,res) =>{
    res.sendFile(path.join(__dirname, 'productos.html'))
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});