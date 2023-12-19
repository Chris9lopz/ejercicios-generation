//5) Aprobación de Examen:
// Solicita al usuario ingresar su puntuación en un examen.
// Utiliza SweetAlert2 para indicar si ha aprobado o no, considerando una puntuación mínima para pasar de 3.0.

Swal.fire({
    title: "Ingrese un numero",
    input: "number",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    showLoaderOnConfirm: true,
}).then((result) => {
    if (result.isConfirmed) {
        let numero = Number(result.value);
        if (numero < 3.0) {
            Swal.fire({
                title: "Reprobó",
                text: `Ha reprobado su examen con: ${numero} de calificación.`,
                icon: "info"
            });
        }  
        else {
            Swal.fire({
                title: "Aprobó",
                text: `Ha aprobado su examen con: ${numero} de calificación.`,
                icon: "info"
            });
        }
    }
});