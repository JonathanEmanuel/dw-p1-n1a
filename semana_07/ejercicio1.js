// Realizar un programa que imprima 15 mensaje con el texto “Soy un texto” en la consola

let i = 1;
while(i<=5){
    console.log("Soy un texto " + i);
    i++;
}

// Realizar un programa que solicite el nombre, nota de tres estudiantes y mueste el nombre y la nota por consola

let j = 1;
let nombre;
let nota;
while(j<=3){
    nombre = prompt("Ingrese el nombre: ");
    nota = prompt("Ingrese la nota: ");
    console.log("Nombre: " + nombre + " | " + "nota: " + nota);
    j++;
}