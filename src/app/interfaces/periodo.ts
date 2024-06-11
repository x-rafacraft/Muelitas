import { Sede } from "./sede";

export interface Periodo {
    id: number;
    nombre: string;
    inicio: string;
    fin: string;
    sede: Sede;
    docentedetalles: string[];
}
