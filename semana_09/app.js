const mensajeDIV = document.querySelector('#mensaje');
let nota, nombre, promedio;
let suma = 0;
let cantidad = + prompt('Ingrese la cantidad de estudiantes');


for(let i=0; i<cantidad; i++){
    nombre = prompt('Ingrese el nombre');
    nota = +prompt('Ingrese la nota de la evaluación');
    suma = suma + nota;

    if( nota >= 7 && nota <=10){
        console.log('Aprobado');
        mensajeDIV.innerHTML += "<p>" + nombre + ": Aprobado !</p>"
    } else if( nota >= 4 && nota < 7){
        console.info(nombre +': Aprobado, solo te queda rendir el final');
        mensajeDIV.innerHTML += "<p class='bg-warning'>" + nombre +": Aprobado, solo te queda rendir el final</p>"
    } else if( nota >= 0 && nota < 4 ) {
        console.error(nombre +': Desaprobado :(');
        mensajeDIV.innerHTML += "<p class='bg-danger'>" + nombre +": Desaprobado :(</p>"
    } else {
        mensajeDIV.innerHTML += "<p class='bg-info'>La nota debe estar entre uno y diez</p>"
    }
}

promedio = suma / cantidad;

mensajeDIV.innerHTML += "<p class='bg-promedio'> El promedio es de " + promedio + "</p>";
