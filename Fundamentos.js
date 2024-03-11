"use stict"
// Metodos de interaccion
// Entrada
// let entrada = prompt();
// entrada = prompt("");
// console.log(entrada);
// Salida
// console.log("Mensaje de consola")
// alert("Mensaje Emergente")
// document.write("Mensaje EMergente") 

/* TIPOS DE VARIABLES */
// DECLARACIONES
/* saludo = "hola1"
var saludo2 = "Hola2"
let Saludo3 = "Hola3"
const Saludo4 = "Hola4"
console.log("saludo")
console.log("saludo2")
console.log("Saludo3")
console.log("Saludo4") */

// AMBITO DE LAS VARIABLES
//SI UNA VARIABLE NO ES DECLARADA JAVA LA TOMA COMO GLOBAL CON "VAR"
/* EXISTEN 3 TIPOS DE ASIGNACIONES DE VARIABLES
   VAR
   LET
   CONST */
   
/*let variableGlobal ="Soy varibable global"
console.log(variableGlobal)
{
  let variableLocal ="Soy variable Local"
  console.log(variableLocal)  
}*/

/* let CambiaValor = 1;
const NocambiaValor = 2;
CambiaValor = 1;
NocambiaValor = 2;
console.log(CambiaValor)
console.log(NocambiaValor) */

/* const a ="a"
const b ="b";
console.log(a,b); */

/* MODO ESCRICTO */
/* El modo estricto sirve para asignar las variable manualmente
con un keyword "use strict" */

/* Datos Primitivos */
// Sting
// let mivariable = "Este es un texto de ejemplo 1";
//  mivariable = 'Este es un texto de ejemplo 2';
//  mivariable = `Este es un texto de ejemplo 3`;
//  // Number
//  mivariable = 10;
//  mivariable = 9.5;
//  mivariable = 124e5;
//  mivariable = 0xff;
//  Boolean
//  mivariable = true;
//  mivariable = false;
//  console.log(mivariable);
//  // Undefined
//  let mivariablesinasignacion;
//  console.log(mivariablesinasignacion)

/* Expresiones booleanas */
// Truthy
/* console.log(true);
console.log(1);
console.log(-1);
console.log("a");
// Falsy
console.log(false);
console.log(0);
console.log("");
console.log(undefined);
console.log(null);
 */

const perfil = "Estudiante"
 switch (perfil){
  case "Estudiante"
    console.log("Eres un estudiante")
    break;
  default;
     console.log("perfil no permitido")
     break;
 }
  