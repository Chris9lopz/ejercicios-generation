// Convertir una frase a formato de título (cada palabra comienza con mayúscula).

function titulo(cadena){
    
    let cadenaTxt = cadena.split(' ');
    let cuento = ""
    for (let palabra of cadenaTxt) {
        let resultado = palabra[0].toUpperCase();
        let subcadena = palabra.slice(1, 10000);
        let cadenaCompleta = resultado + subcadena;
        cuento += cadenaCompleta + ' ';
    }

    console.log(cuento);
    
}

const resultado = titulo("Era se una vez una niña que vestía de capucha roja...");