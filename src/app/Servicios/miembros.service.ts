import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
const idCuenta = localStorage.getItem('infoUser');

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  constructor(private http: HttpClient) { }

  getMiembros() {
    console.log(`${apiUrl}/miembros?filter[where][idCuenta]=${idCuenta}`);

    // return this.http.get(`${apiUrl}/miembros?filter[where][idCuenta]=${idCuenta}`);
    return this.http.get(`${apiUrl}/miembros`);
  }

  postMiembros(miembro) {
    return this.http.post(`${apiUrl}/miembros`, miembro);
  }
}
