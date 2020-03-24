import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RestApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  formulario: FormGroup;
  // errores: any[];

  constructor(private usuariosService: RestApiService, private router: Router) {
    this.formulario = new FormGroup({
      username: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    });
    // this.errores = [];
  }

  ngOnInit(): void {}

  onSubmit() {
    this.usuariosService
      .signup(this.formulario.value)
      .then(response => {
        console.log(response);
        this.router.navigate(["/signin"]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
