// Core
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

// Elements
import { DashboardService } from "../dashboard.service";
import { RestApiService } from "src/app/api.service";

// Models
import { Product } from "src/app/model/product";
import { Order } from "src/app/model/order";
import { Supplier } from "src/app/model/supplier";
import { Customer } from "src/app/model/customer";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  arrOrders: Order[];
  arrSuppliers: Supplier[];
  arrCustomers: Customer[];
  arrProducts: any;
  bigChart: {};
  cards: {};
  pieChart: {};

  displayedColumns: string[] = [
    "id",
    "fk_employee",
    "fk_customer",
    "orderdate",
    "requiredate"
  ];

  dataSource = new MatTableDataSource<Order>(this.arrOrders);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private dashboardService: DashboardService,
    private Api: RestApiService
  ) {
    this.arrOrders = [];
    this.arrSuppliers = [];
    this.arrCustomers = [];
  }

  async ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.arrSuppliers = await this.Api.getAllSupplier();
    this.arrCustomers = await this.Api.getAllClients();

    this.arrOrders = await this.Api.getAllOrder();
    this.dataSource = new MatTableDataSource<Order>(this.arrOrders);
    this.dataSource.paginator = this.paginator;
  }
}
