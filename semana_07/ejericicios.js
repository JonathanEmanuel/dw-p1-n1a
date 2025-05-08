// Escribir un programa que muestre en la consola los numero pares entre 1 y 40 inclusive

let i = 1;
while(i<=40){
    if( i%2 == 0){
        console.log(i);
    }
    i++;
}


//  Mostrar por consola los numero ingresados por el usuario hasta que se ingrese -1

let num;
do {
    num = prompt("Ingrese un número");
    console.log(num);
} while(num != -1);