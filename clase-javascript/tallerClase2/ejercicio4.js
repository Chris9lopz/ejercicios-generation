//4.) Día de la Semana:
//Pregunta al usuario que ingrese un día de la semana.
// Utiliza SweetAlert2 para mostrar un mensaje relacionado con el día ingresado.

Swal.fire({
    title: "Ingrese un numero",
    input: "number",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    showLoaderOnConfirm: true,
}).then((result) => {
    if (result.isConfirmed) {
        let numero = Number(result.value);
        switch (numero) {
            case 1:
                Swal.fire({
                    title: "Lunes",
                    text: "El numero ingresado hace referencia al día lunes.",
                    icon: "info",
                });
                break;
            case 2:
                Swal.fire({
                    title: "Martes",
                    text: "El numero ingresado hace referencia al día martes.",
                    icon: "info",
                });
                break;
            case 3:
                Swal.fire({
                    title: "Miercoles",
                    text: "El numero ingresado hace referencia al día miercoles.",
                    icon: "info",
                });
                break;
            case 4:
                Swal.fire({
                    title: "Jueves",
                    text: "El numero ingresado hace referencia al día jueves.",
                    icon: "info",
                });
                break;
            case 5:
                Swal.fire({
                    title: "Viernes",
                    text: "El numero ingresado hace referencia al día viernes.",
                    icon: "info",
                });
                break;
            case 6:
                Swal.fire({
                    title: "Sabado",
                    text: "El numero ingresado hace referencia al día sabado.",
                    icon: "info",
                });
                break;
            case 7:
                Swal.fire({
                    title: "Domingo",
                    text: "El numero ingresado hace referencia al día domingo.",
                    icon: "info",
                });
                break;
            default:
                Swal.fire({
                    title: "Error",
                    text: "No ha ingresado un formato de numero valido",
                    icon: "error",
                });
        }
    }
});
