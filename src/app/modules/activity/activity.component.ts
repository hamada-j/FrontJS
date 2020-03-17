import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"]
})
export class ActivityComponent implements OnInit {
  arrProducts: Product[];
  constructor(private Api: RestApiService) {
    this.arrProducts = [];
  }

  async ngOnInit() {
    this.arrProducts = await this.Api.getAll();
  }
}
