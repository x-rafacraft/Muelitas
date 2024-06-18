import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://[::1]:8080/ToothLinkAPI/cita';

  constructor(private http: HttpClient) { }

  getCitaList(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.apiUrl}/getall`);
  }

  addCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${this.apiUrl}/create`, cita);
  }

  updateCita(id: number, cita: Cita): Observable<Cita> {
    return this.http.patch<Cita>(`${this.apiUrl}/updateby/${id}`, cita);
  }

  deleteCita(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteby/${id}`);
  }

  findOne(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.apiUrl}/getby/${id}`);
  }
}
