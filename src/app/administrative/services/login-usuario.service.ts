import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginUsuarioService {
  baseUrlApi: string = '';
  constructor(private http: HttpClient) {
    this.baseUrlApi = environment.baseUrlApi;
  }

  signUp(loginForm: LoginUsuario): Observable<LoginUsuario> {
    return this.http.post<LoginUsuario>(
      `${this.baseUrlApi}/loginUsuario/Registrar`,
      loginForm
    );
  }

  login(loginForm: LoginUsuario): Observable<LoginUsuario> {
    return this.http.post<LoginUsuario>(
      `${this.baseUrlApi}/loginUsuario/Autenticacion`,
      loginForm
    );
  }
}
