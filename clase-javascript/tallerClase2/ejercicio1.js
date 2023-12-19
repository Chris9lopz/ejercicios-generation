// Solicita al usuario ingresar su edad mediante un cuadro de diálogo SweetAlert2.
// Muestra un mensaje indicando si es menor de edad o mayor de edad.

Swal.fire({
    title: "Ingrese su edad",
    input: "number",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    showLoaderOnConfirm: true,
}).then((result) => {
    if (result.isConfirmed) {
        let edad = Number(result.value);
        if (edad >= 18) {
            Swal.fire({
                title: "Bienvenido",
                text: "Eres de mayor de edad",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Lo siento",
                text: "Debes ser mayor de edad para ingresar",
                icon: "error"
            });
        }
    }
});