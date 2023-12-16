// Calcular el máximo común divisor (MCD) de dos números.

function esMCD(numero1, numero2) {
    let arrnum1 = [];
    let arrnum2 = [];
    let resultado = [];
    
    for(let i = 1; i <= numero1; i++){
        if(numero1 % i == 0){
            arrnum1.push(i);
        }
    }
    
    for(let j = 1; j <= numero2; j++){
        if(numero2 % j == 0){
            arrnum2.push(j);
        }
    } 

    for(let i = 0; i < arrnum1.length; i++){
        if(arrnum2.includes(arrnum1[i])){
            resultado.push(arrnum1[i]);
        }
    }

    return Math.max(...resultado);

}

let total = esMCD(10,20);
console.log(total);

