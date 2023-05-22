'use strict';

//Fundamentos objetos
console.log("FUNDAMENTOS DE OBJETOS")
const juego = { 
    nombre: "Fortnite",
    genero: "Shooter",
    anio_lanzamiento: 2017,
    autor: "Epic Games",
    plataformas: ['PC', ' Play Station', ' XBOX' , ' Android - IOS'],
    n_personas: ['1','2','3','4'],
    play() {
        return `Jugar con ${this.n_personas[2]+" personas"}`
    }
}

console.log("Nombre del juego: "+juego.nombre)
console.log("Plataformas disponibles: "+juego.plataformas)
console.log(juego.play())

//Destructuracion de objetos
console.log("\nDESESTRUCTURACION DE OBJETOS")
const juego2 = { 
    nombre: "Apex Legends",
    genero: "Shooter",
    anio_lanzamiento: 2019,
    autor: "Respawn Entertainment",
    plataformas: ['PC', ' Play Station', ' XBOX' , ' Android - IOS']
}
let nombre, genero, autor, plataformas;
({nombre, genero, autor, plataformas} = juego2);

console.log(nombre)
console.log(genero)
console.log(autor)
console.log(plataformas)

//Congelacion de objetos
console.log("\nCONGELACION DE OBJETOS")
const juego3 = { 
    nombre: "Residen Evil 4 Remake",
    genero: "Accion - Terror",
    anio_lanzamiento: 2023,
    autor: "Capcom",
    plataformas: ['PC', 'Play Station 4 y 5', 'XBOX' , 'Android - IOS']
}
Object.freeze(juego3);
console.log(Object.isFrozen(juego3));
//juego3.n_jugadores = "Un jugador";

//Copia de 2 objetos 
console.log("\nCOPIA DE 2 OBJETOS")
const juego4 = { 
    nombre: "Residen Evil 4 Remake",
    genero: "Accion - Terror",
    anio_lanzamiento: 2023,
    autor: "Capcom",
    plataformas: ['PC', 'Play Station 4 y 5', 'XBOX' , 'Android - IOS']
}
const nuevo = {
    estreno: "23 de Marzo de 2023",
    guionista: "Mathew J. Costello",
    nominado: "Juego mas anticipado"
}
const completo = {...juego4,...nuevo}
console.log(completo)

//THIS
console.log("THIS")
const juegoll = { 
    nombre: "Fortnite",
    genero: "Shooter",
    anio_lanzamiento: 2017,
    autor: "Epic Games",
    plataformas: ['PC', ' Play Station', ' XBOX' , ' Android - IOS'],
    n_personas: ['1','2','3','4'],
    play: ()=> {
        return `Jugar con ${this.n_personas[2]+" personas"}`
    }
}
//console.log(juegoll.play())

//Metodos
console.log("\nMetodos")
console.log("Obtener las claves:",Object.keys(juegoll))
console.log("Obtener los valores:",Object.values(juegoll))
console.log("Obtener las claves y valores en un array:",Object.entries(juegoll))

//ES6
const motherboard = "Asus A520-M"
const price = 200

const nuev = {
    motherboard,
    price
}
console.log(nuev);