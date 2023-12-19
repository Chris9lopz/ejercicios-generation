// Generar un array con los primeros n números primos.
function esPrimo(n) {
	if (n > 1) {
		if (n == 2) {
			return true;
		}
		let cont = 0;
		for (let i = 2; i < n; i++) {
			if (n % i == 0) {
				cont += 1;
			}
		}
		if (cont > 0) {
			return false;
		} else {
			return true;
		}
	}
}

function primerNP(indice) {
	let numero = [];
	let contador = 1;

	while (numero.length != indice) {
		if (esPrimo(contador)) {
			numero.push(contador);
		}
		contador++;
	}
	return numero;
}

let resultado = primerNP(15);
console.log(resultado);