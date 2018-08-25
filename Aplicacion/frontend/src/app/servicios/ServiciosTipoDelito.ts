import { Injectable } from '@angular/core';
import { DtoService } from '../servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosTipoDelito {
    constructor(private dto:DtoService) { }
    
    obtenerTipoDelito(data)
    {
      //return this.dto.ejecutaGet("http://localhost:4000/TipoDelito/"+curso);
      if(data==""||data==undefined){
        return this.dto.ejecutaGet("http://localhost:4000/TipoDelito/");
      }else{
        return this.dto.ejecutaGet("http://localhost:4000/TipoDelito/"+data);
      }
    
    }

    guardarTipoDelito(data:any)
    {
      return this.dto.ejecutaPut("http://localhost:4000/TipoDelito/",data)
    }
    actualizarTipoDelito(data)
    {
      return this.dto.ejecutaPost("http://localhost:4000/TipoDelito/",data);
    }
    eliminarTipoDelito(data)
    {
      return this.dto.ejecutaDelete2("http://localhost:4000/TipoDelito/"+data);
    }
}