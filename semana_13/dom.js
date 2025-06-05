const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const inputTask = document.querySelector('#task-name');
const listTasks = document.querySelector('#list-tasks');
const container = document.querySelector('#container');
const textRed = document.querySelector('.text-danger');
const parrafos = document.querySelectorAll('p'); // Obtengo un NodeList

textRed.textContent = 'Soy un texto Rojo modificado';


function cambiarTitulo(){
    h1.textContent = 'Nuevo título';
}

let texto = h2.textContent;

console.log(parrafos);

// Vamos a crear elemento del DOM
const subtitulo = document.createElement('h4');
// Agregamos el contenido al elemento creado
subtitulo.textContent = 'Soy un simple subtitulo creado desde JavaScript';

// Agregamos el elemento al Container
container.appendChild( subtitulo );


function addSpan (){
    const span = document.createElement('span');
    container.appendChild(span)
}

function crearTarea(){
    // Creamos el li
    const task = document.createElement('li');
    // Leemos el contenido del input
    const name = inputTask.value;

    // Agregamos el contenido al li
    task.textContent = name;
    // Agregamos el li como hijo del ul
    listTasks.appendChild(task);
    
    // Limpiamos el contenido del input
    inputTask.value = "";
}


