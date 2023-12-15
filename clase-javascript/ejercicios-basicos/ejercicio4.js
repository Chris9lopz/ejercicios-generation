// Itera cada elemento de un elemento

// Declaración de variables
let numeros = [1, 2, 3, 4, 5];

//Opción 1
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Opción 2
for (let numero of numeros) {
    console.log(numero);
}

