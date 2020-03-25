import { Component, OnInit } from "@angular/core";
import { debounceTime } from "rxjs/operators";
import { Post } from "../../../model/post";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestApiService } from "src/app/api.service";
import { ActivatedRoute } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
@Component({
  selector: "app-widget-blog-form",
  templateUrl: "./blog-form.component.html",
  styleUrls: ["./blog-form.component.scss"]
})
export class BlogFormComponent implements OnInit {
  pTitulo: string;
  pAutor: string;
  pImagen: string;
  pCategoria: string;
  pTexto: string;

  arrPosting: Post[];
  post: FormGroup;
  constructor(
    private servcioPosting: RestApiService,
    private activateRoute: ActivatedRoute // private router: Route
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
        //this.autorValidator
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

  onSubmit() {
    const date = new Date();
    const dateConstructor = `
    ${date.getHours()}:${date.getMinutes()},
     ${date.getDay()}/${date.getDate()}/${date.getFullYear()}`;
    const posting = new Post(
      this.post.value.titulo,
      this.post.value.autor,
      this.post.value.imagen,
      this.post.value.categoria,
      dateConstructor,
      this.post.value.texto
    );
    this.arrPosting.push(posting);
    this.servcioPosting.newPost(posting);
  }

  ngOnInit(): void {
    const titulo = this.post.controls.titulo;
    titulo.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      this.pTitulo = value;
    });
    const autor = this.post.controls.autor;
    autor.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      this.pAutor = value;
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
