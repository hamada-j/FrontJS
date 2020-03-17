import { Component, OnInit } from "@angular/core";
import { Region } from "src/app/model/region";
import { RestApiService } from "src/app/api.service";
import { Territories } from "src/app/model/territories";

@Component({
  selector: "app-region",
  templateUrl: "./region.component.html",
  styleUrls: ["./region.component.scss"]
})
export class RegionComponent implements OnInit {
  arrRegions: Region[];
  arrTerritories: Territories[];
  constructor(private Api: RestApiService) {
    this.arrRegions = [];
  }
  async ngOnInit() {
    this.arrRegions = await this.Api.getAllRegions();
    console.log(this.arrRegions);
  }
}
