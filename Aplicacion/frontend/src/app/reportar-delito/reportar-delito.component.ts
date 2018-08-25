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
  constructor() { }

  ngOnInit() {
  }

}
