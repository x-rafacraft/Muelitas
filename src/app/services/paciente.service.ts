import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:8080/ToothLinkAPI/paciente';

  constructor(private http: HttpClient) { }

  getPacienteList(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/getall`);
  }

  addPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.apiUrl}/create`, paciente);
  }
}
