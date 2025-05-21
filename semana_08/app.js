const lista = document.querySelector('#lista-estudiantes');
const span = document.querySelector('#count');
// Contadores
let cantidad = 0;

// Defino una función
function crearItem(nom, ape){
    cantidad = cantidad + 1;
    let item = '<li>' + nom + ' | ' + ape + '</li>';
    lista.innerHTML = lista.innerHTML + item;

    mostrarCantidad();
}
// Defino una función
function solitarEstudiante(){
    let nombre = prompt("Ingrese el estudiante");
    let apellido = prompt("Ingrese el apellido");

    // LLamamos a la función
    crearItem(nombre, apellido);
}

function mostrarCantidad(){
    span.innerText = cantidad;
}





