import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widget-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"]
})
export class MapsComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  constructor() {
    this.lat = 51.678418;
    this.lng = 7.809007;
    this.zoom = 9;
  }
  mapClick(event) {
    // console.log(event);
  }
  mapDobleClick(event) {
    console.log(event);
  }
  ngOnInit(): void {}
}
