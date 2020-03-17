import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Product } from "src/app/model/product";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-widget-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  arrProducts: Product[];
  editProduc: FormGroup;

  constructor(private Api: RestApiService) {
    this.arrProducts = [];

    this.editProduc = new FormGroup({
      id: new FormControl("", [Validators.required, Validators.minLength(5)]),
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      photo: new FormControl("", [Validators.required]),
      unitprice: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),
      unitstock: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),
      unitonorder: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),
      fk_supplier: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),
      fk_category: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }

  onSubmit() {
    console.log(this.editProduc.value);
  }

  async ngOnInit() {
    this.arrProducts = await this.Api.getAll();
    console.log(this.arrProducts);
  }
}
