import { Component, OnInit, OnDestroy } from "@angular/core";
import { Employee } from "src/app/model/employee";
import { RestApiService } from "src/app/api.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable, from, Subscription } from "rxjs";
import { GeoFire } from "geofire";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-widget-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"]
})
export class MapsComponent implements OnInit, OnDestroy {
  lat: number;
  lng: number;
  zoom: number;
  style: any;
  userId: string;
  employee: Employee;
  description = "FireBaseDB";
  itemValue = "";
  items: Observable<any[]>;
  itemsR: Observable<any[]>;
  item = "";
  coords: {};
  arrTerritories: Array<any>;
  arrRegions: Array<any>;
  dbRef: any;
  geoFire: any;
  hits = new BehaviorSubject([]);
  markers: any;
  title: string;
  destroyEvent: Subscription;
  destroyValue: Subscription;
  constructor(
    private Api: RestApiService,
    public FireBase: AngularFireDatabase
  ) {
    this.dbRef = this.FireBase.list("items");
    // this.geoFire = new GeoFire(this.dbRef.$ref);
    FireBase.list("items")
      .valueChanges()
      .subscribe(result => {
        this.arrTerritories = result;
        // console.log(this.arrTerritories[1].content);
      });

    FireBase.list("itemsR")
      .valueChanges()
      .subscribe(result => {
        this.arrRegions = result;
      });

    this.destroyEvent = this.Api.newLocation$.subscribe(event => {
      switch (event.target.innerText) {
        case "Africa":
          this.lat = this.arrRegions[1].content["lat"];
          this.lng = this.arrRegions[1].content["lng"];
          this.title = event.target.innerText;
          break;
        case "America":
          this.lat = this.arrRegions[2].content["lat"];
          this.lng = this.arrRegions[2].content["lng"];
          this.title = event.target.innerText;
          break;
        case "Oceania":
          this.lat = this.arrRegions[3].content["lat"];
          this.lng = this.arrRegions[3].content["lng"];
          this.title = event.target.innerText;
          break;
        case "Asia":
          this.lat = this.arrRegions[4].content["lat"];
          this.lng = this.arrRegions[4].content["lng"];
          this.title = event.target.innerText;
          break;
        case "Europa":
          this.lat = this.arrRegions[5].content["lat"];
          this.lng = this.arrRegions[5].content["lng"];
          this.title = event.target.innerText;
          break;
      }
    });
    this.destroyValue = this.Api.newLocationT$.subscribe(value => {
      this.lat = this.arrTerritories[value].content["lat"];
      this.lng = this.arrTerritories[value].content["lng"];
    });

    this.zoom = 2;
    // this.geoFire.hits.subscribe(hits => (this.markers = hits));
    this.style = [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }]
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }]
      }
    ];
  }
  ngOnDestroy() {
    this.destroyEvent.unsubscribe();
    this.destroyValue.unsubscribe();
  }

  // setLocaion(key: string, coords: Array<number>) {
  //   this.geoFire
  //     .set(key, coords)
  //     .then(_ => console.log("location updated"))
  //     .catch(err => console.log(err));
  // }
  // getLocation(radius: number, coords: Array<number>) {
  //   this.geoFire
  //     .query({
  //       center: coords,
  //       radius: radius
  //     })
  //     .on("key_entred", (key, location, distance) => {
  //       let hit = {
  //         location: location,
  //         distance: distance
  //       };
  //       let currentHits = this.hits.value;
  //       currentHits.push(hit);
  //       this.hits.next(currentHits);
  //     });
  // }

  mapClick(event) {
    console.log(event.coords);
    this.coords = event.coords;
    // this.FireBase.list("itemsR").push({ content: this.coords });
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
        // this.geoFire.geoLocations(500, [this.lat, this.lng]);
      });
    }
  }
}
