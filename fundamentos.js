'use strict';

//Variables
var nombre = "Oscar";
let edad = 5;
const anio_nacimiento = 2002;
console.log("VARIABLES")
console.log(nombre)
console.log(edad)
console.log(anio_nacimiento+"\n")

//Strings
let marca_auto = "Chevrolet"
let modelo = "SAIL"
let color = "Gris"
const matricula = "PBA-123"
let precio = 17990
console.log ("STRING")
console.log ("Informacion del vehiculo\nMarca: "+marca_auto+"\nModelo: "+modelo+"\nColor: "+color+"\nMatricula: "+matricula+"\nPrecio: "+precio+"\n")

//Numeros
let nota1 = 8.2
let nota2 = 5.2
let nota3 = 9
let promedio = (nota1+nota2+nota3)/3;
console.log("NUMEROS")
console.log("El estudiante tiene las siguientes notas:")
console.log("Primer nota: "+nota1+"\nSegunda nota: "+nota2+"\nTercer nota: "+nota3+"\nSu nota final es: "+promedio+"\n")

//Booleanos
let edad1 = 10
let edad2 = 7
let edad3 = 8
let edad4 = "7"
console.log("BOOLEANOS")
console.log(edad1>edad2)
console.log(edad4>edad3)
console.log(edad1==edad2)
console.log(edad2===edad4)

//Condicionales
let num1 = 3
let num2 = 3
console.log("\nCondicionales")
if (num1 > num2) {
    console.log("El numero mayor es "+num1+" ,el numero menor es "+num2)
}
else if (num2>num1){
    console.log("El numero mayor es "+num2+" ,el numero menor es "+num1)
}
else {
    console.log("Los numeros son iguales")
}

//Bucles
const dias_laborables = ['lunes','martes','miercoles','jueves','viernes']
const dias_no_laborables = ['sabado','domingo']
console.log("\nBUCLES")
console.log("Dias laborables")
for (const i of dias_laborables) {
    console.log(`${i}`) 
}
console.log("Dias no laborables")
for (const x of dias_no_laborables) {
    console.log(`${x}`) 
}