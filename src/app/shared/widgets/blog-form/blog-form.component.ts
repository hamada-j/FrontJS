import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { debounceTime } from "rxjs/operators";

import { Post } from "../../../model/post";
import { Employee } from "src/app/model/employee";
import { RestApiService } from "src/app/api.service";
import { MessageComponent } from "../message/message.component";

@Component({
  selector: "app-widget-blog-form",
  templateUrl: "./blog-form.component.html",
  styleUrls: ["./blog-form.component.scss"]
})
export class BlogFormComponent implements OnInit {
  panelOpenState = false;
  durationInSeconds = 5;
  userId: string;
  employee: Employee;
  pTitulo: string;
  pAutor: string;
  pImagen: string;
  pCategoria: string;
  pTexto: string;

  arrPosting: Post[];
  post: FormGroup;
  constructor(
    private servcioPosting: RestApiService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.arrPosting = [];
    this.post = new FormGroup({
      titulo: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ]),
      autor: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ]),
      imagen: new FormControl("", [
        Validators.required
        // Validators.pattern(
        //   /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?:: (\d +)) ? (?: \/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
        // )
      ]),
      categoria: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      fecha: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),

      texto: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: this.durationInSeconds * 1000
    });
  }

  onSubmit() {
    this.post.value.autoId = this.employee["photo"];
    this.post.value.autor = this.employee["name"];
    const date = new Date().toISOString();
    const posting = new Post(
      this.post.value.autoId,
      this.post.value.titulo,
      this.post.value.autor,
      this.post.value.imagen,
      this.post.value.categoria,
      date,
      this.post.value.texto
    );
    this.arrPosting.push(posting);
    this.servcioPosting.newPost(posting).then(response => {
      // console.log(response)
      // this.post.reset();
    });
    this.servcioPosting.newPosts$.emit(posting);
  }

  async ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.employee = await this.servcioPosting.getEmployeeById(this.userId);
    const titulo = this.post.controls.titulo;
    titulo.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      this.pTitulo = value;
    });
    const imagen = this.post.controls.imagen;
    imagen.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      this.pImagen = value;
    });
    const cateroria = this.post.controls.categoria;
    cateroria.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      this.pCategoria = value;
    });
    const texto = this.post.controls.texto;
    texto.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      this.pTexto = value;
    });
  }
}
