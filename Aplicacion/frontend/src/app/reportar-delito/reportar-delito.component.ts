import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps'; 
@Component({
  selector: 'app-reportar-delito',
  templateUrl: './reportar-delito.component.html',
  styleUrls: ['./reportar-delito.component.css']
})
export class ReportarDelitoComponent implements OnInit {
  lat: number = -0.1681557;
  lng: number = -78.46712440000002;
  // lat:number=0;
  // lng:number=0;
  ubicacion:any;
  band_boton;
  band_delito;
  constructor() { }

  ngOnInit() {
    // this.obtenerPosicion();
    
    this.band_boton=true;
    this.band_delito=false;
  }
  obtenerPosicion(e){
    this.ubicacion=e;
    console.log(this.ubicacion);
  }
  nuevoDelito(){
    this.band_boton=false;
    this.band_delito=true;
    // console.log(this.ubicacion.coords.lat);
    // console.log(this.ubicacion);
  }

}
