import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/api.service";
// Models
import { Product } from "src/app/model/product";
import { Customer } from "src/app/model/customer";
import { Supplier } from "src/app/model/supplier";
import { Order } from "src/app/model/order";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"]
})
export class ActivityComponent implements OnInit {
  arrOrders: Order[];
  arrSuppliers: Supplier[];
  arrCustomers: Customer[];
  arrProducts: Product[];

  constructor(private Api: RestApiService) {
    this.arrOrders = [];
    this.arrSuppliers = [];
    this.arrCustomers = [];
  }

  async ngOnInit() {
    this.arrSuppliers = await this.Api.getAllSupplier();
    this.arrCustomers = await this.Api.getAllClients();
    this.arrOrders = await this.Api.getAllOrder();
  }
}
