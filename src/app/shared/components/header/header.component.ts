import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() sideBar: EventEmitter<any>;
  constructor(private router: Router) {
    this.sideBar = new EventEmitter();
  }

  ngOnInit(): void {}

  handleClick() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("token_since");
    this.router.navigate(["/signin"]);
  }
  handleClickHelp() {
    this.router.navigate(["/help"]);
  }

  handleSideBar() {
    this.sideBar.emit();
    // make de graphics responsive
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
