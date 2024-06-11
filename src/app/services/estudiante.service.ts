import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../interfaces/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstuadianteService {

  constructor(private http: HttpClient) { }

  getEstudianteList(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>('http://localhost:3000/estudiante/getall');
  }
}
