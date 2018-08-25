import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';
import { ActivatedRoute, Router } from "@angular/router/";
import {ServiciosDelito} from '../servicios/ServiciosDelito';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = -0.1681557;
  lng: number = -78.46712440000002;
  lista_delitos:any=[];
  iconUrl='http://maps.google.com/mapfiles/ms/icons/green.png';
  constructor(private SDelito:ServiciosDelito) { }
  ngOnInit() {

    this.obtenerDelitos();
  }
  obtenerDelitos(){
    this.SDelito.obtenerDelito("").subscribe(
      (resp:any)=>{           
        this.lista_delitos=resp;  
        console.log(this.lista_delitos);
        
      },
      (error)=>{

      }

    );
  }
}
