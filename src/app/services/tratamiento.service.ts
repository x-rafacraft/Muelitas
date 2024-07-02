import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from '../interfaces/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  private apiUrl = 'https://back-end-odontologia-production.up.railway.app/Toothlinkapi/tratamiento';

  constructor(private http: HttpClient) { }

  getTratamientoList(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.apiUrl}/getall`);
  }

  addTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>(`${this.apiUrl}/create`, tratamiento);
  }
}
