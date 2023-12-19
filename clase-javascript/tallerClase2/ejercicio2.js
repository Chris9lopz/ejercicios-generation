// 2.) Número Positivo o Negativo:
// Pide al usuario ingresar un número.
// Utiliza SweetAlert2 para mostrar si el número es positivo, negativo o cero.

Swal.fire({
    title: "Ingrese un numero",
    input: "number",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    showLoaderOnConfirm: true,
}).then((result) => {
    if (result.isConfirmed) {
        let numero = Number(result.value);
        if (numero < 0) {
            Swal.fire({
                title: "Negativo",
                text: "El numero ingresado es un numero negativo.",
                icon: "info"
            });
        } else if(numero == 0) {
            Swal.fire({
                title: "Cero",
                text: "El numero ingresado es un igual a cero.",
                icon: "info"
            });
        } 
        else {
            Swal.fire({
                title: "Positivo",
                text: "El numero ingresado es positivo.",
                icon: "info"
            });
        }
    }
});