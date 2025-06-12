
/* 
FORMA TRADICIONAL
const box1 = document.getElementById('box1');
const box2 = document.getElementsByClassName('box2');
const h1 = document.getElementsByTagName('h1');

 */
let count = 2;
// FORMA MODERNA
const box1 = document.querySelector("#box1");
const box2 = document.querySelector(".box2");
const h1 = document.querySelector("h1");
const parrafos = document.querySelectorAll("p");


//console.log(box1, box2, h1);
console.log(parrafos);
console.log("Mostramos el primer <p>");
console.log( parrafos[0].textContent);

console.log("Mostramos el tercer <p>");
console.log( parrafos[2].textContent);

// Manipulación de clases CSS
box2.classList.add('bg-green');


function cambiarColor(){
    box1.classList.toggle("bg-green");
/*     if( box1.classList.contains('bg-green')){
        box1.classList.remove('bg-green')
    } else {
        box1.classList.add('bg-green');
    } */
}

// Creación de elementos
const nuevoP = document.createElement('p');
nuevoP.textContent = "Soy un nuevo texto";
const header = document.querySelector('header');
header.appendChild( nuevoP)
console.log(nuevoP)


function crearBox(){
    console.log('Creando nueva box');
    count = count + 1;
    const box = document.createElement("div");
    box.textContent = count;
    box.classList.add('box');
    const padre = document.querySelector('.flex-container');
    padre.appendChild(box);


    box.addEventListener('dblclick', eliminarBox);
    box.addEventListener('click', greenBox);
    console.log(box)
}

function eliminarBox(evento){
    const elemento = evento.target;
    elemento.remove();
}

function greenBox(evento){
    const elemento = evento.target;
    console.log(elemento);
    elemento.classList.toggle('bg-green');
    elemento.classList.toggle('zoom')
}

// EVENTOS
const btnCrear = document.querySelector("#btnCrearBox");
btnCrear.addEventListener("click", crearBox);