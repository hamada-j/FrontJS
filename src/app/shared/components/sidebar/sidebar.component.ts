import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/model/employee";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  userId: string;
  employee: Employee;
  constructor(private Api: RestApiService) {}

  async ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.employee = await this.Api.getEmployeeById(this.userId);
  }
}
