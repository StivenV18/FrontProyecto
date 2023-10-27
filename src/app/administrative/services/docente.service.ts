import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Docente } from '../models/docente';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  baseUrlApi: string = '';

  constructor(private http: HttpClient) {
    this.baseUrlApi = environment.baseUrlApi;
  }

  getListaDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(
      `${this.baseUrlApi}/Docente/ConsultarDocentes`
    );
  }

  getListaDocentesById(id: number): Observable<Docente> {
    return this.http.get<Docente>(
      `${this.baseUrlApi}/Docente/ConsultarDocente/${id}`
    );
  }

  postDocente(docenteForm: Docente): Observable<Docente> {
    return this.http.post<Docente>(
      `${this.baseUrlApi}/Docente/CrearDocente`,
      docenteForm
    );
  }

  putDocente(docenteForm: Docente): Observable<any> {
    return this.http.put<Docente>(
      `${this.baseUrlApi}/Docente/EditarDocente`,
      docenteForm
    );
  }

  deleteDocente(id: number): Observable<any> {
    return this.http.delete(
      `${this.baseUrlApi}/Docente/EliminarDocente?id=${id}`
    );
  }
}
