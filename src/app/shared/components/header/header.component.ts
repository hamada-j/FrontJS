import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() sideBar: EventEmitter<any>;
  constructor() {
    this.sideBar = new EventEmitter();
  }

  ngOnInit(): void {}

  handleSideBar() {
    this.sideBar.emit();
    // make de graphics responsive
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
