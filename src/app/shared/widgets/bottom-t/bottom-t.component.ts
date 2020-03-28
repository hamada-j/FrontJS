import { Component, OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-bottom-t",
  templateUrl: "./bottom-t.component.html",
  styleUrls: ["./bottom-t.component.scss"]
})
export class BottomTComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomTComponent>,
    private serviceEmitting: RestApiService
  ) {}
  openLink(value: any) {
    console.log(value);
    this._bottomSheetRef.dismiss();
    this.serviceEmitting.newLocationT$.emit(value);
    event.preventDefault();
  }
  ngOnInit(): void {}
}
