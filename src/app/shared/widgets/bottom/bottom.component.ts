import { Component, OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { RestApiService } from "src/app/api.service";
@Component({
  selector: "app-bottom",
  templateUrl: "./bottom.component.html",
  styleUrls: ["./bottom.component.scss"]
})
export class BottomComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomComponent>,
    private serviceEmitting: RestApiService
  ) {}
  openLink(event) {
    this._bottomSheetRef.dismiss();
    this.serviceEmitting.newLocation$.emit(event);
    event.preventDefault();
  }
  ngOnInit(): void {}
}
