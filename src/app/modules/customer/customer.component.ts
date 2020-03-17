import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/customer";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"]
})
export class CustomerComponent implements OnInit {
  arrCustomers: Customer[];
  constructor(private Api: RestApiService) {
    this.arrCustomers = [];
  }
  async ngOnInit() {
    this.arrCustomers = await this.Api.getAllClients();
    console.log(this.arrCustomers);
  }
}
