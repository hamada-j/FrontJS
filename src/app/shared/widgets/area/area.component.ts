import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-widget-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"]
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  @Input() data = [];
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: "area"
      },
      title: {
        text: "Activity"
      },
      subtitle: {
        text: "from: Data Base MySQL and MongoDB-Atlas"
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },
      credits: {
        // anular los creditos de la libreria
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.data
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
