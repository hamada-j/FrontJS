import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/model/order";
import { RestApiService } from "src/app/api.service";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  arrOrders: Order[];
  displayedColumns: string[] = [
    "select",
    "position",
    "name",
    "weight",
    "symbol"
  ];
  dataSource = new MatTableDataSource<Order>(this.arrOrders);
  selection = new SelectionModel<Order>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Order): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.id + 1}`;
  }

  constructor(private Api: RestApiService) {
    this.arrOrders = [];
  }
  async ngOnInit() {
    this.arrOrders = await this.Api.getAllOrder();
    console.log(this.arrOrders);
  }
}
