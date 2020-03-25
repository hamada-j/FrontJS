import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  formulario: FormGroup;
  errors: string;
  errorsStatus: string;

  constructor(private usuariosService: RestApiService, private router: Router) {
    this.formulario = new FormGroup({
      employeeNum: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl("", [
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      password: new FormControl("", [Validators.pattern(/^(?=.*\d).{4,8}$/)])
    });
    this.errors = "";
    this.errorsStatus = "";
  }

  ngOnInit(): void {}

  handelClickAll($event) {
    // console.log($event);
    this.router.navigate(["/signup"]);
  }
  handelClick($event) {
    // console.log($event);
    this.router.navigate(["/signin"]);
  }

  onSubmit() {
    this.usuariosService
      .signup(this.formulario.value)
      .then(response => {
        console.log(response);
        this.router.navigate(["/signin"]);
      })
      .catch(err => {
        this.errors = err.error["error"];
        this.errorsStatus = err.statusText;
      });
  }
}
