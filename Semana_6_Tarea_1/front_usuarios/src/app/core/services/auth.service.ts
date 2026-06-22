import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { variables_ambiente } from '../../../environments/environment.developer';

export interface LoginResponse {
  message: string;
  usuario: {
    id: number;
    username: string;
    nombre_completo: string;
    email: string;
    createAt: string;
  };
}

export interface RegistroResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = variables_ambiente.apiBaseUrl;
  private readonly SESSION_KEY = 'usuario_sesion';

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem(this.SESSION_KEY, JSON.stringify(res.usuario));
        })
      );
  }

  registro(
    email: string,
    password: string,
    nombre_completo: string,
  ): Observable<RegistroResponse> {
    return this.http.post<RegistroResponse>(`${this.apiUrl}/auth/registro`, {
      username: email,
      password,
      nombre_completo,
      email,
    });
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  obtenerSesion() {
    const data = localStorage.getItem(this.SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }

  estaLogueado(): boolean {
    return this.obtenerSesion() !== null;
  }
}
