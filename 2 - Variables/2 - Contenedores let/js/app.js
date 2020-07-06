"use strict"

var nombre = 'Sergio';
//Cuando se quiera trabajar con una variable GLOBAL, se puede implementar VAR

console.log(nombre)

function saludo() {
  let nombre = 'yacafx'; //Si queremos trabajar con una variable dentro de una función o bloque de código en específico, utilizaríamos LET.
  console.log(nombre)
    
  let edad = 34; 
  console.log(edad)
}

console.log(edad)

saludo();