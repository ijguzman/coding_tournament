import { Injectable } from '@angular/core';
import { DtoService } from '../servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosDelito {
    constructor(private dto:DtoService) { }
    
    obtenerDelito(curso)
    {
      return this.dto.ejecutaGet("http://localhost:4000/Delito/"+curso);
    }
    guardarDelito(data:any)
    {
      return this.dto.ejecutaPut("http://localhost:4000/Delito/",data)
    }
    actualizarDelito(data)
    {
      return this.dto.ejecutaPost("http://localhost:4000/Delito/",data);
    }
    eliminarDelito(data)
    {
      return this.dto.ejecutaDelete2("http://localhost:4000/Delito/"+data);
    }
}
