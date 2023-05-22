"use strict";
//Introduccion
const meses1 = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']
const meses2 = ['julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

const mesesT = [...meses1,...meses2]
console.log(mesesT)
console.log("Elementos: ", meses1.length)
console.log("Elementos: ", meses2.length)
console.log("Elementos: ", mesesT.length)

//Recorrer arreglos
console.log("\nRECORRER ARREGLOS")
mesesT.forEach((g,j)=>console.log(`${j} - ${g}`))

//Metodos
console.log("\nMETODOS")
const game = ["God of War 2", "Aventura", 2007, false, {desarrollador: "SIE"}]
const plataforma = ["Play Station 2", "Play Station 3"]
const singleplayer = "Un jugador"
//push and unshift
console.log("\nPUSH - UNSHIFT")
game.push(plataforma)
game.unshift(singleplayer)
console.log(game);

//pop y shift
console.log("\nPOP - SHIFT")
game.pop(game)
game.shift(game)
console.log(game);

//Find
const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
console.log("\nFIND")
const diaUno = semana.find((e)=>e==="Martes")
console.log(diaUno);

const diaDos = semana.find((e)=>e==="Abril")
console.log(diaDos);

//FindIndex
console.log("\nFindIndex")
const know = semana.findIndex((k)=>k==="Lunes")
console.log(know)
const know2 = semana.findIndex((k)=>k==="Ramiro")
console.log(know2)

//Filter
console.log("\nFilter")
const uno = semana.filter((k)=>k.startsWith('M'))
const dos = semana.filter((k)=>k!='Miercoles')
console.log(uno);
console.log(dos);

//Concat 
console.log("\nConcat")
const nom = ['Juan', 'Alberto', 'Raul', 'Esteban']
const apel = ['Alvarez', 'Rodriguez', 'Gutierrez', 'Costa']

const nom_apel = nom.concat(apel)
console.log(nom_apel)

//Includes
console.log("\nIncludes")
const colores = ['Azul', 'Verde', 'Amarillo', 'Anaranjado']
console.log(colores.includes("Verde"))
console.log(colores.includes("Negro"))

//Some - Every
console.log("\nSome - Every")
const productos = [
    {
        nom_prod: "A520-M",
        precio: 200,
        stock: 20 
    },
    {
        nom_prod: "Ryzen 5 5600g",
        precio: 210,
        stock: 5
    }
]
const disponibilidad = productos.some(x=>x.stock!=0)
console.log(disponibilidad)
const dosp1 = productos.every(x=>x.precio>=210)
console.log(dosp1)

//Reverse
console.log("\nReverse")
console.log(semana.reverse())

//Sort
console.log("\nSort")
console.log(semana.sort())

//Rest
console.log("\nRest")
const [num1, num2, ...resto] = [1, 2, 3, 4, 5, 6]
console.log(num1)
console.log(num2)
console.log(resto)