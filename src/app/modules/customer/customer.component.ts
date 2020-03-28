import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/customer";
import { RestApiService } from "src/app/api.service";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";
import { BottomComponent } from "src/app/shared/widgets/bottom/bottom.component";
import { BottomTComponent } from "src/app/shared/widgets/bottom-t/bottom-t.component";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"]
})
export class CustomerComponent implements OnInit {
  arrCustomers: Customer[];
  constructor(
    private Api: RestApiService,
    private _bottomSheet: MatBottomSheet
  ) {
    this.arrCustomers = [];
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomComponent);
  }
  openBottomSheet2(): void {
    this._bottomSheet.open(BottomTComponent);
  }
  async ngOnInit() {
    this.arrCustomers = await this.Api.getAllClients();
    console.log(this.arrCustomers);
  }
}
