import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Order, addOrder, OrderDetail } from "src/app/model/order";
import { RestApiService } from "src/app/api.service";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { Customer } from "src/app/model/customer";
import { Supplier } from "src/app/model/supplier";
import { Product } from "src/app/model/product";
import { Employee } from "src/app/model/employee";
import { MessageComponent } from "src/app/shared/widgets/message/message.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  durationInSeconds: 2;
  arrOrders: Order[];
  arrSuppliers: Supplier[];
  arrCustomers: Customer[];
  arrProducts: Product[];

  userId: string;
  employee: Employee;
  orderForm: FormGroup;
  completed: boolean;

  orderDeteilsForm: FormGroup;
  completed2 = false;
  newOrderID: number;
  orderNumber: Order;

  orderDone: Order;
  orderDetailsDone: OrderDetail;

  constructor(private Api: RestApiService, private _snackBar: MatSnackBar) {
    this.arrOrders = [];
    this.arrCustomers = [];
    this.newOrderID = 0;
    this.completed = false;

    this.orderForm = new FormGroup({
      fk_customer: new FormControl(" "),
      fk_employee: new FormControl(" "),
      orderdate: new FormControl(""),
      requiredate: new FormControl(""),
      address: new FormControl("")
    });
    this.orderDeteilsForm = new FormGroup({
      fk_orders: new FormControl(" "),
      fk_product: new FormControl(" "),
      quantity: new FormControl(""),
      discunt: new FormControl("")
    });
  }

  onSubmit() {
    this.orderForm.value.fk_employee = this.employee["id"];
    this.orderForm.value.orderdate = new Date().toISOString().substring(0, 10);
    const newOrder = new addOrder(
      // tslint:disable-next-line: radix
      parseInt(this.orderForm.value.fk_customer),
      this.orderForm.value.fk_employee,
      this.orderForm.value.orderdate,
      this.orderForm.value.requiredate,
      this.orderForm.value.address
    );
    this.Api.newOrder(newOrder).then(response => {
      localStorage.setItem("orderId", response["insertId"]);
      console.log(this.newOrderID);
      if (response["affectedRows"] === 1) {
        this.completed = true;
        console.log(this.completed);
      } else {
        this.completed = false;
        console.log(this.completed);
      }
    });
  }
  async onSubmitD() {
    this.orderNumber = await this.Api.getOrderById(
      localStorage.getItem("orderId")
    );
    console.log(this.orderNumber);
    this.orderDeteilsForm.value.fk_orders = this.orderNumber["id"];

    const newOrder = new OrderDetail(
      this.orderDeteilsForm.value.fk_orders,
      // tslint:disable-next-line: radix
      parseInt(this.orderDeteilsForm.value.fk_product),
      // tslint:disable-next-line: radix
      parseInt(this.orderDeteilsForm.value.quantity),
      // tslint:disable-next-line: radix
      parseInt(this.orderDeteilsForm.value.discunt)
    );
    console.log(newOrder);
    this.Api.newOrderProductById(newOrder).then(response => {
      localStorage.setItem("orderDeteilId", response["insertId"]);
      console.log(response["affectedRows"]);
      if (response["affectedRows"] === 1) {
        return (this.completed = true);
      } else {
        return (this.completed = false);
      }
    });
  }

  async handeleDone($event) {
    this.orderDone = await this.Api.getOrderById(
      localStorage.getItem("orderId")
    );

    this.orderDetailsDone = await this.Api.getOrderProductById(
      localStorage.getItem("orderDeteilId")
    );
  }

  async ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.employee = await this.Api.getEmployeeById(this.userId);
    this.arrOrders = await this.Api.getAllOrder();
    this.arrProducts = await this.Api.getAll();
    this.arrSuppliers = await this.Api.getAllSupplier();
    this.arrCustomers = await this.Api.getAllClients();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: this.durationInSeconds * 1000
    });
  }
  displayedColumns: string[] = ["name", "weight", "symbol", "position"];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Order[] = this.arrOrders;

  addColumn() {
    const randomColumn = Math.floor(
      Math.random() * this.displayedColumns.length
    );
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
}
