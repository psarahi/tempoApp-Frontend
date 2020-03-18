import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(
    private http: HttpClient
  ) { }

  postProyecto(proyecto) {
    return this.http.post(`${apiUrl}/proyectos`, proyecto);
  }

  getProyecto() {
    return this.http.get(`${apiUrl}/proyectos`);
  }
}
