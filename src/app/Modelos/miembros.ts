export interface MiembrosModel {
  _id: string;
  idCuenta: string;
  nombre: string;
  apellido: string;
  correo: string;
  costoHr: number;
  perfil: number;
  expertis: string[];
  estado: boolean;
}

export interface Miembros {
    _id: string;
    idCuenta: string;
    nombre: string;
    apellido: string;
    correo: string;
    costoHr: number;
    perfil: number;
    expertis: string[];
    estado: boolean;
  }
  