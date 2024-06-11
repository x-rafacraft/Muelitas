import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Periodo } from '../interfaces/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  private apiUrl = 'http://localhost:3000/periodo';

  constructor(private http: HttpClient) { }

  getPeriodoList(): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(`${this.apiUrl}/getall`);
  }

  addPeriodo(periodo: Periodo): Observable<Periodo> {
    return this.http.post<Periodo>(`${this.apiUrl}/create`, periodo);
  }
}
