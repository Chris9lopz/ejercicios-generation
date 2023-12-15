// Crear un pop-up que le solicite al usuario su edad y que muestre en un mensaje indicando si es mayor de edad

const edad = prompt("Ingrese su edad");

if (edad >= 18) {
  // Mostrar un mensaje de bienvenida
    Swal.fire({
    title: "!Bienvenido!",
    text: `Hola, tienes ${edad} años`,
    icon: "success",
});
} else {
  // Mostrar un mensaje de error si el usuario no ingreso un nombre
    Swal.fire({
    title: "Incorrecto",
    text: "Debes ingresar tener minimo 18 años.",
    icon: "error",
    });
}
