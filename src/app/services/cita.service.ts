import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'https://back-end-odontologia-production.up.railway.app/Toothlinkapi/cita';

  constructor(private http: HttpClient) { }

  getCitaList(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.apiUrl}/getall`);
  }

  getCitaCount(): Observable<number> {
    return new Observable<number>(observer => {
      this.getCitaList().subscribe(citas => {
        observer.next(citas.length);
        observer.complete();
      });
    });
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
