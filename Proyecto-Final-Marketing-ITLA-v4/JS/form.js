// // Obtener elementos del DOM
// const modal = document.getElementById("modal");
// const openModalBtn = document.getElementById("openModalBtn");
// const closeModalBtn = document.getElementsByClassName("close")[0];
// const form = document.getElementById("form");

// // Función para abrir el modal
// function openModal() {
//   modal.style.display = "block";
// }

// // Función para cerrar el modal
// function closeModal() {
//   modal.style.display = "none";
// }

// // Evento click para abrir el modal al hacer clic en la imagen
// openModalBtn.addEventListener("click", openModal);

// // Evento click para cerrar el modal al hacer clic en el botón de cerrar
// closeModalBtn.addEventListener("click", closeModal);

// // Evento submit del formulario
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

//   // Aquí puedes agregar tu lógica para enviar los datos del formulario, por ejemplo:
//   const nombre = document.getElementById("nombre").value;
//   const telefono = document.getElementById("telefono").value;
//   const correo = document.getElementById("correo").value;
//   const dia = document.getElementById("dia").value;
//   const servicio = document.getElementById("servicio").value;

//   // Por ejemplo, mostrar los datos en la consola
//   console.log("Nombre:", nombre);
//   console.log("Teléfono:", telefono);
//   console.log("Correo:", correo);
//   console.log("Día de Agendar:", dia);
//   console.log("Servicio:", servicio);

//   // Puedes agregar aquí la lógica para enviar los datos a tu servidor o realizar otras acciones necesarias
//   closeModal(); // Cerrar el modal después de enviar el formulario
// });

// Obtener elementos del DOM
const modal = document.getElementById("modal");
const openModalBtns = document.querySelectorAll(".openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];
const form = document.getElementById("form");

console.log("hola mundo")
// Función para abrir el modal
function openModal() {
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none";
}

// Evento click para abrir el modal al hacer clic en las imágenes
openModalBtns.forEach(function(btn) {
  btn.addEventListener("click", openModal);
});

// Evento click para cerrar el modal al hacer clic en el botón de cerrar
closeModalBtn.addEventListener("click", closeModal);

// Evento submit del formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const dia = document.getElementById("dia").value;
  const servicio = document.getElementById("servicio").value;

  // Aquí puedes agregar la lógica para enviar los datos a tu servidor
  // Por ejemplo, mostraremos una alerta con los datos del formulario
//   const mensaje = `Cita agendada:\n
//     Nombre: ${nombre}\n
//     Teléfono: ${telefono}\n
//     Correo: ${correo}\n
//     Día de Agendar: ${dia}\n
//     Servicio: ${servicio}`;
const mensaje = "La cita fue enviada de manera satisfactoria!";

  alert(mensaje);

  closeModal(); // Cerrar el modal después de enviar el formulario
});