import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of, empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  crearTarea(t: Tarea, user_token): Observable<any> {
    return this.http.post('http://localhost:8000/tareas/', {
      'titulo': t.titulo,
      'descripcion': t.descripcion,
      'estado': t.estado,
      'lat': t.lat,
      'lng': t.lng
    }, {
      headers: {'Authorization': `Token ${user_token}`}
    });
  }



  actualizarTarea(t: Tarea, user_token): Observable<any> {
    if (t.estado === 2) {
      t.fecha_termino = new Date();
    }
    if (t.estado === 1) {
      t.fecha_inicio = new Date();
    }    
    console.log(t.id);
    return this.http.put(`http://localhost:8000/tareas/${t.id}/`, {
      'titulo': t.titulo,
      'descripcion': t.descripcion,
      'estado': t.estado,
      'fecha_inicio':t.fecha_inicio,
      'fecha_termino':t.fecha_termino
    }, {
      headers: {'Authorization': `Token ${user_token}`}
    });
  }

  getTareas(user_token): Observable<any> {
    console.log(`Tarea service user_token: ${user_token}`);
    return this.http.get('http://localhost:8000/tareas/', {
      headers: {'Authorization': `Token ${user_token}`}
    });
  }
}
