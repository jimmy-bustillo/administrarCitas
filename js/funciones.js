import Citas from "./classes/Citas.js";
import UI from "./classes/UI.js";

import {
  mascotaInput,
  propietarioInput,
  telefonoInput,
  fechaInput,
  horaInput,
  sintomasInput,
  formulario,
} from "./selectores.js";

const ui = new UI();
const administrarCitas = new Citas();

let editando = false;

// Objeto con información de la cita
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

// Agrega datos al objeto de cita
export function datosCitas(e) {
  citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva Cita a la clase de Cita

export function nuevaCita(e) {
  e.preventDefault();

  // Extraer información de cita
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  // Validar?refresque
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    return;
  }

  if (editando) {
    ui.imprimirAlerta("Editado correctamente");

    // Pasar el objeto de la cita a la edición
    administrarCitas.editarCitas({ ...citaObj });

    // Regresar el texto del botón a su estado original

    formulario.querySelector('button[type="submit"]').textContent =
      "Crear Cita";

    // Quitando modo edición
    editando = false;
  } else {
    // Generar un id unico
    citaObj.id = Date.now();

    // Creando una nueva cita
    administrarCitas.agregarCita({ ...citaObj });

    // Mensaje de agregado correctamente
    ui.imprimirAlerta("Se agrego correctamente");
  }

  // Reiniciar el objeto para la validación
  reiniciarObjeto();

  // Resetea el formulario
  formulario.reset();

  // Mostrar el HTMl de las citas
  ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

export function eliminarCita(id) {
  // Eliminar Cita
  administrarCitas.eliminarCita(id);

  // Muestre mensaje
  ui.imprimirAlerta("La cita se elimino correctamente");

  // Refresca las citas
  ui.imprimirCitas(administrarCitas);
}

// Carga los datos y el modo edición

export function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  // Llenar los inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  // Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  // Cambiar el texto del botón
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";

  editando = true;
}
