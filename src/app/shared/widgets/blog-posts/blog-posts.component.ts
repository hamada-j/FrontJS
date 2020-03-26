import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/model/post";
import { RestApiService } from "src/app/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/model/employee";

@Component({
  selector: "app-widget-blog-posts",
  templateUrl: "./blog-posts.component.html",
  styleUrls: ["./blog-posts.component.scss"]
})
export class BlogPostsComponent implements OnInit {
  userId: string;
  employee: Employee;
  responseMsg: string;

  numPosts: number;
  arrTransito: {};
  arrPost: Post[];
  constructor(
    private postService: RestApiService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.arrPost = [];
    this.arrTransito = {};
    this.numPosts = 0;
  }
  handelDelete(pId) {
    this.postService.deletePost(pId).then(async response => {
      this.responseMsg = response["message"];
      this.arrTransito = await this.postService.getAllPosts();
      // console.log(this.arrTransito["posts"]);
      this.arrPost = this.arrTransito["posts"];
      this.numPosts = this.arrTransito["count"];
    });
  }
  handelEdit(pPost) {
    this.postService.editPosts$.emit(pPost);
  }

  async ngOnInit() {
    this.postService.newPosts$.subscribe(async arrP => {
      this.arrTransito = await this.postService.getAllPosts();
      this.arrPost = this.arrTransito["posts"];
      this.numPosts = this.arrTransito["count"];
    });
    for (let post of this.arrPost) {
      this.employee = await this.postService.getEmployeeById(post.autorId);
    }
    this.arrTransito = await this.postService.getAllPosts();
    this.arrPost = this.arrTransito["posts"];
    this.numPosts = this.arrTransito["count"];
  }

  handelSearch(texto) {
    if (texto.value === "all") {
      console.log(texto.value);
      this.postService
        .getAllPosts()
        .then(arrFiltrado => (this.arrPost = arrFiltrado));
    } else {
      console.log(texto.value);
      this.postService
        .getByCategoryPost(texto.value)
        .then(arrFiltrado => (this.arrPost = arrFiltrado));
    }
  }
}
