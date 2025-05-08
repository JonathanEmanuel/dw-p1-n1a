let n1 = 2;
let n2 = 4;
let n3 = 4;
let nombre = "Julia"; // prompt("Ingrese su nombre");
let apellido = "Ruiz";
// Concatenamos las variables String
let nombreCompleto = nombre + " " +apellido;

// alert("Hola! " + nombreCompleto);
console.log('Hola desde la consola');


let i = 1; // Variable de control

while( i <= 10){ // Condición de corte
    console.log("Hola! " + i);
    i++ // Actualizo la variable de control
}


let j = 10;
do {
    console.log("Hola " + i)
    j = j + 1; 
} while (j <= 3); // Condición de corte

console.log('----- Bucle For -----');

for( let i=1; i <= 5; i++){
    console.log("Hola " + i);
}