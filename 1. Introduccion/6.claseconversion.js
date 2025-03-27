// Explicit Type Casting

const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)


const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting

const sum = '5' + 3 // conversion implicita de 3 a string
console.log(sum)

const sumWithBoolean = '3' + true // conversion implicita de true a string
console.log(sumWithBoolean)


const sumWithNumber = 2 + true // conversion implicita de true a number
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log('------------------')
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)

console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)


console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)


/*  Si hay al menos un string, JavaScript concatena.

Si no hay ningún string, JavaScript realiza una suma.*/


// ejercicio
const numero = '596'
const numeroConvertido = parseInt(numero)

console.log(typeof numero)
console.log(typeof numeroConvertido)
