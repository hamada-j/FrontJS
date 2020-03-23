import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RestApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  formulario: FormGroup;
  errores: any[];

  constructor(private usuariosService: RestApiService, private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
    this.errores = [];
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formulario.value);
    this.usuariosService
      .login(this.formulario.value)
      .then(response => {
        console.log(response);
        console.log(response["success"]);
        localStorage.setItem("token", response["success"]);
        localStorage.setItem("token_since", new Date().toString());
        // this.router.navigate(["/"]);
      })
      .catch(err => {
        this.errores = err.error;
      });
  }
}
