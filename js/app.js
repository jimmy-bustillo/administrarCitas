// Campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

// UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("input", datosCitas);
  propietarioInput.addEventListener("input", datosCitas);
  telefonoInput.addEventListener("input", datosCitas);
  fechaInput.addEventListener("input", datosCitas);
  horaInput.addEventListener("input", datosCitas);
  sintomasInput.addEventListener("input", datosCitas);
}

const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

function datosCitas(e) {
  citaObj[e.target.name] = e.target.value;
}
