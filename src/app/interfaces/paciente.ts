export interface Paciente {
  id: number;
  FechaCreacion: string;
  HoraCreacion: string;
  dni: string;
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  Sexo: string;
  Lugar: string;
  Domicilio: string;
  FechaNacimiento: Date;
  EstadoCivil: string;
  NroCelular: string;
  Correo: string;
  Ocupacion: string;
  Responsable: string;
  DomicilioResponsable: string;
  CelularResponsable: string;
  MotivoConsulta: string;
}
