import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Periodo } from '../interfaces/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  private apiUrl = 'http://[::1]:8080/ToothLinkAPI/periodo';

  constructor(private http: HttpClient) { }

  getPeriodoList(): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(`${this.apiUrl}/getall`);
  }

  addPeriodo(periodo: Periodo): Observable<Periodo> {
    return this.http.post<Periodo>(`${this.apiUrl}/create`, periodo);
  }
}
