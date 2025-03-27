const numeroSecreto = Math.floor(Math.random() * 10 +1);

/*    
Math.random()
    Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
    Ejemplo: 0.372, 0.876, etc.

Math.random() * 10
    Multiplica ese número aleatorio por 10, lo que da un número decimal entre 0 y 9.999...
    Ejemplo: 0.372 * 10 = 3.72

+ 1
    Se le suma 1 para que el rango sea de 1 a 10.999...
    Ejemplo: 3.72 + 1 = 4.72

    Math.floor()
    Redondea hacia abajo al número entero más cercano.
    Ejemplo: Math.floor(4.72) devuelve 4.

🎯 Resultado final:

Un número entero aleatorio entre 1 y 10.

*/

const numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 a 10"));

console.log('Este es el número con el que juegas' ,{numeroJugador})

if(numeroJugador === numeroSecreto){
    console.log("Ganaste xuxetumare");
} else if (numeroJugador > numeroSecreto) {
    console.log("Te sobró") 
} else {
    console.log("Te faltó")
}
    
