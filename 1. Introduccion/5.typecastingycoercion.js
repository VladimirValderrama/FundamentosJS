/* En lenguajes existen los compiladores o interpretes, que traducen el codigo a un lenguaje que el computador entiende
Así, existen los lenguajes compilados y los interpretados

Compilados: C, C++, Rust TODO EL CODIGO ES TRADUCIDO ANTES DE LA EJECUCION DEL PROGRAMA
Interpretados: JS, Python, PHP. SE VAN TRADUCIENDO MIENTRAS SE VA EJECUTANDO EL CODIGO */


/* Tambien hay otras caracteristicas como el Chequeo de tipos de datos
Compilados = Estáticos
Interpretados = Dinámicos. El leng no se da cuenta que tipo de datos es hasta la ejecución*/


const saludo = 'Hola'
console.log(saludo)

const despedida = 'Adios'
console.log(despedida)

const titulo = 'Me gusta estudiar'
console.log(titulo) // se corre el codigo parte por parte y al llegar aqui da el error

const descripcion = 'porque aprendo mucho'
console.log(descripcion)


const numero = 2
const booleano = true
console.log(numero + booleano) // Da valor 3.
// Se suma numero y boolean y se hace una conversion de tipos, existe la conversion implicita como esta, o la explicita

