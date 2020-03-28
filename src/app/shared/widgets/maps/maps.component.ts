import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/model/employee";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-widget-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"]
})
export class MapsComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  userId: string;
  employee: Employee;
  constructor(private Api: RestApiService) {
    this.zoom = 9;
  }
  mapClick(event) {
    // console.log(event);
  }
  mapDobleClick(event) {
    console.log(event);
  }
  async ngOnInit() {
    this.getUserLocation();
    this.userId = localStorage.getItem("userId");
    this.employee = await this.Api.getEmployeeById(this.userId);
  }
  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
