import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sede } from '../interfaces/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private apiUrl = 'http://localhost:3000/sede';

  constructor(private http: HttpClient) {}

  getSedeList(): Observable<Sede[]> {
    return this.http.get<Sede[]>(`${this.apiUrl}/getall`);
  }

  addSede(sede: Sede): Observable<Sede> {
    return this.http.post<Sede>(`${this.apiUrl}/create`, sede);
  }

  getSedeById(id: number): Observable<Sede> {
    return this.http.get<Sede>(`${this.apiUrl}/getby/${id}`);
  }

  updateSede(sede: Sede): Observable<Sede> {
    return this.http.patch<Sede>(`${this.apiUrl}/updateby/${sede.id}`, sede);
  }
}
