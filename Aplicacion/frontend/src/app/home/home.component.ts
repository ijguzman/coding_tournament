import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';
import { ActivatedRoute, Router } from "@angular/router/";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = -0.1681557;
  lng: number = -78.46712440000002;
  constructor() { }
  markers: marker[] = [
    {
        lat: -0.1681557,
        lng: -78.46712440000002,
        label: 'Map A',
        draggable: true,
        iconUrl:'http://maps.google.com/mapfiles/ms/icons/green.png'
    },
    {
        lat: 51.373858,
        lng: 7.215982,
        label: 'Map B',
        draggable: false,
        iconUrl:'http://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
        lat: 51.723858,
        lng: 7.895982,
        label: 'Map C',
        draggable: true,
        iconUrl:'http://maps.google.com/mapfiles/ms/icons/yellow.png'
    }
];

  ngOnInit() {
  }
  clickedMarker(marker:marker, index:number)
  {
   console.log('Clicked Marker:'+ marker.label+' at index'+index);
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  iconUrl?: string;
}