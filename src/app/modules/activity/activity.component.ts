import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/api.service";
import { MatTableDataSource } from "@angular/material/table";
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
  arrInformation: any[];
  arrInformationId: any[];
  pIdInformation: string;

  // tslint:disable-next-line: max-line-length
  displayedColumns: any[] = [
    "name",
    "unitprice",
    "unitstock",
    "unitonorder",
    "quantity",
    "discunt",
    "fk_category",
    "fk_product",
    "fk_orders",
    "fk_customer",
    "fk_employee",
    "fk_supplier",
    "orderdate",
    "requiredate"
  ];

  dataSource;
  dataSource2;
  constructor(private Api: RestApiService) {
    this.arrOrders = [];
    this.arrSuppliers = [];
    this.arrCustomers = [];
    this.arrInformation = [];
    this.arrInformationId = [];
    this.pIdInformation = "";
  }
  async onSubmit(value) {
    console.log(value);
    this.arrInformationId = await this.Api.getIdInformation(value);
    this.dataSource2 = this.arrInformationId;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async ngOnInit() {
    this.arrProducts = await this.Api.getAll();
    console.log(this.arrProducts["name"]);
    this.arrSuppliers = await this.Api.getAllSupplier();
    this.arrCustomers = await this.Api.getAllClients();
    this.arrOrders = await this.Api.getAllOrder();
    this.arrInformation = await this.Api.getInformation();
    this.dataSource = new MatTableDataSource<any>(this.arrInformation);
  }
}
