const mensajeDIV = document.querySelector('#mensaje');
let nota;
nota = +prompt('Ingrese la nota de la evaluación');

/*
if( nota >= 7){
    console.log('Aprobado');
    mensajeDIV.innerHTML = "<p>Aprobado !</p>"
} else {
    // Si está entre cuatro y siete
    if( nota >= 4){
        console.info('Aprobado, solo te queda rendir el final');
        mensajeDIV.innerHTML = "<p class='bg-warning'>Aprobado, solo te queda rendir el final</p>"
    } else {
        console.error('Desaprobado :(');
        mensajeDIV.innerHTML = "<p class='bg-danger'>Desaprobado :(</p>"
    }
}
*/
if( nota >= 7 && nota <=10){
    console.log('Aprobado');
    mensajeDIV.innerHTML = "<p>Aprobado !</p>"
} else if( nota >= 4 && nota < 7){
     console.info('Aprobado, solo te queda rendir el final');
    mensajeDIV.innerHTML = "<p class='bg-warning'>Aprobado, solo te queda rendir el final</p>"
} else if( nota >= 0 && nota < 4 ) {
    console.error('Desaprobado :(');
    mensajeDIV.innerHTML = "<p class='bg-danger'>Desaprobado :(</p>"
} else {
    mensajeDIV.innerHTML = "<p class='bg-info'>La nota debe esta rentre uno y diez</p>"
}