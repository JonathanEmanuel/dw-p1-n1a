const h4Precio = document.querySelector('#precio');
let precio = +prompt("Ingrese el precio");
//precio = parseFloat( precio );
let ivaPorcentaje = 0.21;
//console.log(precio, typeof(precio));
let iva = precio * ivaPorcentaje;
let precioFinal = precio + iva;


let confirmacionIVA = confirm("Sumar IVA");

// Condicionales
if( confirmacionIVA == true ){
    console.log("El precio Final con el IVA $", precioFinal);
    alert("El precio final con el IVA es " + precioFinal);

    h4Precio.innerText = "El precio con IVA es $"+precioFinal;

} else {
    alert("El pricio sin IVA es " + precio)
}