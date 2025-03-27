/* CONDICIONAL SWITCH

La condición switch en JavaScript es una estructura de control que permite ejecutar diferentes bloques de código 
según el valor de una expresión.

Sólo válida si es TRUE. Habrán diferentes escenarios y si una expresión se cumple ejecuta ese bloque de código, habrá un 
default en caso de que ningún escenario se cumpla


switch(expresion) {
    case valor1 :  // Valor a evaluar
        // Código a ejecutar si la evaluación se cumple
        break; // Detén la ejecución de los siguientes casos.
    case valor2: // Valor a evaluar si no se cumplió el 1er case
        // código a ejecutar
        break // Detén la ejecución de los siguientes casos (siempre y cuando se cumpla este)
    default: // "else", ninguno fue verdad
        //  Así que ejecuta este código
}




SWITCH ES IMPORTANTE POR SER UN OPERADOR DE COMPARADOR ESTRICTO, COMO TRIPLE IGUAL.

*/


let expresion = "Piña"

switch(expresion) {
    case "Naranjas":
        console.log("Las naranjas cuestan $1.000 el kilo")
        break;
    case "Peras":
        console.log("Las peras cuestan $1.100 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $4.300 el kilo")
        break;
    case "Plátanos":
        console.log("Los plátanos cuestan $2.000 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los Mangos y las Papayas cuestan $2.500 el kilo")
        break;
    default:
        console.log(`Lo siento, no contamos con ${expresion}`) // IMPORANTE: USAR LOS BACKTICKS (` `) EN LUGAR DE COMILLAS SIMPLES O DOBLES 
}

console.log("¿Hay algo más que desees?")