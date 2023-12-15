// Crear una función que me imprima en consola los numero del 1 al n (n es un parámetro de la función)

let frase = '';

function imprimirNumeros(n) {
    for(let i = 1; i <= n; i++) {
        frase += i + ' ';
    }
    console.log(frase);
}

imprimirNumeros(10);