import { Component, OnInit, Input } from '@angular/core';
import {ServiciosTipoDelito} from '../servicios/ServiciosTipoDelito':
import {ServiciosDelito} from '../servicios/ServiciosDelito';
@Component({
  selector: 'app-delito',
  templateUrl: './delito.component.html',
  styleUrls: ['./delito.component.css']
})
export class DelitoComponent implements OnInit {
  @Input() ubicacion:any={};
  constructor(private Stipodelito:ServiciosTipoDelito,private SDelito:ServiciosDelito) { }
  tiposDelitos:any=[];
  tipoDel:any;
  curso:any;
  delito:any={};
  ngOnInit() {
    console.log(this.ubicacion);
    this.Stipodelito.obtenerTipoDelito("").subscribe(
      (resp:any)=>{           
        this.tiposDelitos=resp;  
        console.log(resp);
      },
      (error)=>{

      }

    );
  }
  guardarDelito(){
    console.log(this.delito);
    var coords={
      latitud:this.ubicacion.coords.lat,
      longitud:this.ubicacion.coords.lng
    }
    this.delito["Lugar"]=coords;
    console.log(this.delito);
    this.SDelito.guardarDelito(this.delito).subscribe(
      (resp:any)=>{
        console.log(resp);
      }
    );
  
  }

}
