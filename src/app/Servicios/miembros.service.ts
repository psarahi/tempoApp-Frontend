import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  constructor(private http: HttpClient) { }

  getMiembros() {
    return this.http.get(`${apiUrl}/miembros`);
  }

  postMiembros(miembro) {
    return this.http.post(`${apiUrl}/miembros`, miembro);
  }
}
