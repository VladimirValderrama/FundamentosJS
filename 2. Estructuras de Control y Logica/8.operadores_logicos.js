/* 3 operadores basicos de mucha ayuda

*/

// &&  "and" Se utiliza para evaluar dos expresiones boolenas y solo devuelve TRUE si AMBAS expresiones son true
// ||  "Or" Se utiliza para evaluar dos expresiones booleanas y devuelve TRUE si AL MENOS UNA de las expresiones son true
// !   "NO" Se utiliza para negar el valor de una expresión booleana. Es decir, si la expresión ES TRUE, devuelve false, y si la expresión es FALSE, devuelve TRUE.

const a = 10
const b = 20
const c = "10"

console.log(a == b && a === c)
console.log(a != b || a === c)
console.log(!(a === c)) // De entrada es false, pero por el operador logico !, es true
console.log(!(a == b))