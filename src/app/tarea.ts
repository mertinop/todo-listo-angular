export enum EstadoTarea {
    Creada
    , EnProceso
    , Terminada
}

export function estado2str(e: EstadoTarea): string {
    switch (e) {
      case EstadoTarea.Creada: return 'Creada';
      case EstadoTarea.EnProceso: return 'En Proceso';
      case EstadoTarea.Terminada: return 'Terminada';
    }
  }

export class Tarea {
    id: number;
    titulo: string;
    descripcion;
    estado: EstadoTarea;
    lat;
    lng;
    fecha_inicio: Date;
    fecha_termino: Date;

    constructor(id, titulo, descripcion, estado = EstadoTarea.Creada, lat = null, lng = null) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.lat = lat;
        this.lng = lng;
        this.fecha_inicio= null;
        this.fecha_termino=null;
    }

    toString() {
        return `Tarea #${this.id}: ${this.titulo}`;
    }
}
