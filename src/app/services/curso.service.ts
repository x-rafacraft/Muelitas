import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:3000/curso';

  constructor(private http: HttpClient) { }

  getCursoList(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/getall`);
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/create`, curso);
  }
}
