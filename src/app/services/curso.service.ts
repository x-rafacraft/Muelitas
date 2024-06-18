import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://[::1]:8080/ToothLinkAPI/curso';

  constructor(private http: HttpClient) { }

  getCursoList(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/getall`);
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/create`, curso);
  }
}
