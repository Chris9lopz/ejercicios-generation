// Solicita al usuario ingresar un número, luego crea un arreglo de números del 1 al 10 
// y cuenta cuántas veces el número ingresado por el usuario aparece en ese arreglo. 

let arreglo = [];

for(let i = 1; i <= 10; i++) {
    let numero = prompt("Ingresa un numero del 1 al 10");
    arreglo.push(numero);       
}

let adivinarNum = prompt("Ingrese un numero de los que ha ingresado");

let contar = {};

for(let i = 0; i < arreglo.length; i++){
    if(contar[arreglo[i]]) {
        contar[arreglo[i]] += 1;
    } else {
        contar[arreglo[i]] = 1
    }
    
}

Swal.fire({
    title: `Tu numero es: ${contar[adivinarNum]}`,
    icon: "success"
  });