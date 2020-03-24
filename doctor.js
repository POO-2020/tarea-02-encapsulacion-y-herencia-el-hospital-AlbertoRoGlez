import Nombre from './Nombre.js';
import Pacientes from `./paciente.js`;
class Doctor extends Pacientes {
_nombre;
_especialidad;
_telefono;
_cedula;

  constructor(nombre, fechaNacimiento, telefono, especialidad, cedula) {
    super({ nombre, fechaNacimiento, telefono });
    this._especialidad = especialidad;
    this._cedula = cedula;
  }

  getPerfil() {
    return `${this._cedula}, ${
      this._especialidad
    }, ${this._nombre.getNombreCompleto()}, ${this._telefono}`;
  }
}

export default Doctor;