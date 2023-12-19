// 3.) Comparación de Dos Números:
//Solicita al usuario ingresar dos números.
//Muestra un cuadro de diálogo indicando si los números son iguales o diferentes.

let numero1 = prompt("Ingrese un numero");
let numero2 = prompt("Ingrese el siguiente numero");

if(numero1 == numero2) {
    Swal.fire({
        title: "Iguales",
        text: `El numero ${numero1} es igual al ${numero2}`,
        icon: "success"
    });
} else {
    Swal.fire({
        title: "Diferentes",
        text: `El numero ${numero1} es diferente al numero ${numero2}`,
        icon: "warning"
    });  
}