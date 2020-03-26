import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  formulario: FormGroup;
  errors: string;
  errorsStatus: string;

  constructor(private usuariosService: RestApiService, private router: Router) {
    this.formulario = new FormGroup({
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
    this.router.navigate(["/signup"]);
  }
  handelClick($event) {
    this.router.navigate(["/signin"]);
  }

  onSubmit() {
    this.usuariosService
      .signin(this.formulario.value)
      .then(response => {
        localStorage.setItem("userId", response["userId"]);
        localStorage.setItem("token", response["success"]);
        localStorage.setItem("token_since", new Date().toString());
        this.router.navigate(["/"]);
      })
      .catch(err => {
        this.errors = err.error["error"];
        this.errorsStatus = err.statusText;
      });
  }
}
