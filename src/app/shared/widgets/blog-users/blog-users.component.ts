import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/model/employee";
import { Post, PostEdit } from "src/app/model/post";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestApiService } from "src/app/api.service";

@Component({
  selector: "app-widget-blog-users",
  templateUrl: "./blog-users.component.html",
  styleUrls: ["./blog-users.component.scss"]
})
export class BlogUsersComponent implements OnInit {
  postEdit: Post;
  userId: string;
  employee: Employee;
  pTitulo: string;
  pAutor: string;
  pImagen: string;
  pCategoria: string;
  pTexto: string;
  responseMsg: string;

  numPosts: number;
  arrTransito: {};
  arrPost: Post[];

  arrPosting: Post[];
  post: FormGroup;
  constructor(private servcioPosting: RestApiService) {
    this.arrPosting = [];
    this.post = new FormGroup({
      titulo: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ]),
      imagen: new FormControl("", [Validators.required]),
      categoria: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      texto: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  async onSubmit() {
    console.log(this.postEdit.id);
    this.post.value.id = this.postEdit["id"];
    this.post.value.autorId = this.employee["photo"];
    this.post.value.autor = this.employee["name"];
    const date = new Date().toISOString();
    const posting = new PostEdit(
      this.post.value.id,
      this.post.value.autorId,
      this.post.value.titulo,
      this.post.value.autor,
      this.post.value.imagen,
      this.post.value.categoria,
      date,
      this.post.value.texto
    );
    this.arrPosting.push(posting);
    this.servcioPosting.editPost(posting).then(respose => {
      console.log(respose);
      this.servcioPosting.newPosts$.emit(posting);
    });
  }
  async ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.employee = await this.servcioPosting.getEmployeeById(this.userId);
    this.servcioPosting.editPosts$.subscribe(async pPost => {
      this.postEdit = pPost;
      this.post.controls["titulo"].setValue(this.postEdit.titulo, {
        onlySelf: true
      });
      this.post.controls["imagen"].setValue(this.postEdit.imagen, {
        onlySelf: true
      });
      this.post.controls["categoria"].setValue(this.postEdit.categoria, {
        onlySelf: true
      });
      this.post.controls["texto"].setValue(this.postEdit.texto, {
        onlySelf: true
      });
    });
  }
}
