const ul = document.querySelector("ul");
const spanCantidad = document.querySelector('.cantidad');
let nombre;
let cantidad = prompt("Cuantos estudiantes ingresamos?");
let i = 1;

spanCantidad.innerText = cantidad;

while(i<= cantidad){
    nombre = prompt("Ingrese el nombre del estudiante: ");



    console.log("Nombre: " + nombre);3
    
    ul.innerHTML = ul.innerHTML + "<li>" + nombre + "</li>";
    i++
    //i =  i + 1;
}
