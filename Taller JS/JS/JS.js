/* EJERCICIO 1 */

let nombre = prompt("¿Cual es tu nombre?");

let mensaje1 = `¡Hola ${nombre}, bienvenido al taller de JavaScript!`;

console.log(mensaje1);

/* EJERCICIO 2 */

let edad = parseInt(prompt("¿Cual es tu edad?"));

const mensaje2 = `Tu edad es ${edad}`;

console.log(mensaje2);

/* EJERCICIO 3 */

let numero1 = parseInt(
  prompt("Introduce el primer numero para hacer el condicional if:")
);
let numero2 = parseInt(
  prompt("Introduce el segundo numero para hacer el condicional if:")
);

if (numero1 === numero2) {
  console.log(`${numero1} es igual a ${numero2}`);
} else if (numero1 > numero2) {
  console.log(`${numero1} es mayor que ${numero2}`);
} else {
  console.log(`${numero1} es menor que ${numero2}`);
}

/* EJERCICIO 4 */

let numero3 = parseFloat(
  prompt("Introduce el primer numero para las operaciones aritmeticas:")
);
let numero4 = parseFloat(
  prompt("Introduce el segundo numero para las operaciones aritmeticas:")
);
let operacion = prompt("¿Que operacion deseas realizar? (+, -, *, /)");

if (operacion === "+") {
  console.log("El resultado es: " + (numero3 + numero4));
} else if (operacion === "-") {
  console.log("El resultado es: " + (numero3 - numero4));
} else if (operacion === "*") {
  console.log("El resultado es: " + numero3 * numero4);
} else if (operacion === "/") {
  if (numero4 !== 0) {
    console.log("El resultado es: " + numero3 / numero4);
  } else {
    console.log("No se puede dividir entre 0");
  }
} else {
  console.log("Operacion no valida");
}

/* EJERCICIO 5 */

let numero5 = parseInt(
  prompt("Introduce el primer numero para hacer la comparacion:")
);
let numero6 = parseInt(
  prompt("Introduce el segundo numero para hacer la comparacion:")
);

if (numero5 > numero6) {
  console.log(`${numero5} es mayor que ${numero6}`);
} else if (numero5 < numero6) {
  console.log(`${numero5} es menor que ${numero6}`);
} else {
  console.log("Ambos numeros son iguales.");
}
