import { Sede } from "./sede";

export interface Periodo {
    id: number;
    nombre: string;
    inicio: string;
    fin: string;
    sedenom: string;
    sede: Sede;
    docentedetalles: string[];
}
