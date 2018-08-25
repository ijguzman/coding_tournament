import { Component, OnInit } from '@angular/core';
import {ServiciosTipoDelito} from '../servicios/ServiciosTipoDelito'
@Component({
  selector: 'app-delito',
  templateUrl: './delito.component.html',
  styleUrls: ['./delito.component.css']
})
export class DelitoComponent implements OnInit {

  constructor(private Stipodelito:ServiciosTipoDelito) { }
  tiposDelitos:any=[];
  tipoDel:any;
  curso:any;
  ngOnInit() {
    this.Stipodelito.obtenerTipoDelito("").subscribe(
      (resp:any)=>{           
        this.tiposDelitos=resp;  
        console.log(resp);
      },
      (error)=>{

      }

    );
  }

}
