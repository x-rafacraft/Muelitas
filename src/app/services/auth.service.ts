import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://[::1]:8080/ToothLinkAPI/user';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/getall`).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          return user;
        } else {
          throw new Error('Invalid credentials');
        }
      })
    );
  }
  logout(): Observable<void> {
    // Eliminar información del usuario del local storage o del servicio de estado global
    localStorage.removeItem('user');
    return of(undefined);
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
