/* Hablaremos sobre ejecución condicional, pero antes se verán los operadores de comparación, estos nos ayudan a generar alguna condicion//

 == : igualdad débil, de valores pero no de tipos de datos

 === : igualdad estricta, igualdad de valores y tipos de datos
 
 != : Si a valor es diferente de b valor, da true. Si es igual, da false

 !== : Si a es diferente de b en valor y tipo de dato, de true. Si a es igual a b en valor y tipo, da false.

 > : Mayor que, true o false 
 < : Menor que, true o false

 >= : Mayor o igual que, true o false
 <= : Menor o igual que, true o false

*/

const a = 10;
const b = 20
const c = "10"
const d = 10

console.log(a == b);
console.log(a === c);
console.log(a != b); // ¿El valor de a es diferente al valor de b? Sí, por ende, true.
console.log(a !== b); // ¿a es diferente en valor y tipo de b? Si, por ende, true
console.log(a != c); // ¿El valor de a es diferente del valor de c? No, por ende, false
console.log(a !== c); // ¿Los valores y tipo de a y c son diferentes? Si por ende, true
console.log(a !== d); // ¿Los valores y tipo de a y d son diferentes? No, por ende, false

