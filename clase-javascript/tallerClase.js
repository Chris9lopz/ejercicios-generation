//1.) Accede a las propiedades de un objeto que tenga: nombre, apellido, fecha de nacimiento y  
//cedula de ciudadania que imprima un mensaje.
//push de pao
let persona = {
    nombre: "Christian",
    apellido: "Lopez",
    fechaNacimiento: "1999-12-08",
    cedulaCiudadania: 123456789
};

console.log("Nombre: " + persona.nombre + "\nApellido: " + persona.apellido + "\nFecha de nacimiento: " + persona.fechaNacimiento + "\nCedula de ciudadania: " + persona.cedulaCiudadania);

for(let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);	
}
// Esto es un conflicto
//Comentario que genera conflicto
//2.) Asigna un valor nulo e imprime un mensaje.

let valorNulo = null;
console.log(valorNulo)

//3.) Declara una variable sin asignarle un valor e imprime un mensaje.
let valorSinAsignar;
console.log(valorSinAsignar);

//4.) Crea un símbolo con una descripción y úsalo en un objeto.

let simbolo = Symbol("Simbolo");
console.log(simbolo);

let objeto = {
    nombreSimbolo: simbolo
};

console.log(objeto.nombreSimbolo);

//5.) Crea una variable de la palabra reservada Date e imprime la fecha actual.

let fechaActual = new Date();
console.log(fechaActual);

//6.) Utiliza una expresión regular para validar un formato de correo electrónico. 
let regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
let correo = "example@example.com"

if(regex.test(correo)){
    console.log("Correo valido")
} else {
    console.log("Correo invalido")
}
