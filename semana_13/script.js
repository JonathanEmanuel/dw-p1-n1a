let nombre = 'Delarah';  // String
let apellido =  "Beraja";
let dni = 1234; // number
let cursa = true; // boolean
let email = 'delarah.beraja@emae.edu.ar';
// Objeto Literal
let estudiante = {
    // Propiedades ( Atributos)
    nombre: 'Franco',
    apellido: 'Paca', 
    email: 'franco.paca@emae.edu.ar',
    cursa: true,
    // Funciones ( Métodos )
    decirMateria: function mostrarMateria(){
        alert('Estamos cursando Programación I')
    }
};


let fn = function mostrarMateria(){
    alert('Estamos cursando Programación I')
}

console.log( 'fn', typeof(fn));
/* 
let nombre2 = 'Franco';
let apellido2 = 'Paca';
let email2 = 'franco.paca@emae.edu.ar';
 */
console.log( nombre, typeof(nombre) );
console.log( dni, typeof(dni) );
console.log( cursa, typeof(cursa) );
console.log('estudiante', typeof(estudiante));



console.log(nombre, apellido, email);
console.log(estudiante);
// para acceder a una propiedad de un objeto utilizamos el punto
console.log(estudiante.nombre);

const pre = document.querySelector('#preDatos');

// Para modifica un atributo de un objeto accedemos a la propiedad del mismo con un "." y asignamos su valor
estudiante.email = "franco.paca@gmail.com";
estudiante.nombre = "FRANCO";


// Para acceder a un atributo de un objeto usamos el "."
pre.innerText = estudiante.nombre;
pre.innerText += ' | '
pre.innerText += estudiante.email;


// Otro Objeto Literales
const estudiante2 = {
    // Propiedades
    nombre: "Cristina",
    email: "cristina.cristaldo@emae.edu.ar",
    cursa: true,
    materia: "Programación I",
    // Métodos
    decirNombre(){
        alert('Mi nombres Cristina')
    },
    decirMateria: function() {
        alert('La materia que curso es '+ this.materia);
    },
    decirEmail: function(){
        alert("Mi Email es " + this.email)
    },
    mostrarDatos: function(){
        console.log("Nombre: " + this.nombre + " | " + " Email: " + this.email)
    },
    actualizarMateria: function(materia){
        console.log('Se ingreso la materia ' +  materia);
        this.materia = materia;
    }
}

estudiante2.email = "c.cristaldo@emae.edu.ar";

console.log('----------------------------');
console.log( estudiante2.nombre);
//estudiante2.decirEmail();
estudiante2.mostrarDatos();
estudiante2.actualizarMateria('Maquetado y Desarrollo Web');
estudiante2.decirMateria();