// Acceder a las propiedades de un objeto e imprimir su contenido

// Declaración de variables
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
};

// Iterar a las propiedades del objeto
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
