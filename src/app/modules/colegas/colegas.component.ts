import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/model/employee";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-colegas",
  templateUrl: "./colegas.component.html",
  styleUrls: ["./colegas.component.scss"]
})
export class ColegasComponent implements OnInit {
  arrEmployee: Employee[];
  constructor(private Api: RestApiService) {
    this.arrEmployee = [];
  }
  async ngOnInit() {
    this.arrEmployee = await this.Api.getAllEmployee();
  }
}
