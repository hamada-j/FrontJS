import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/model/post";
import { RestApiService } from "src/app/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-widget-blog-posts",
  templateUrl: "./blog-posts.component.html",
  styleUrls: ["./blog-posts.component.scss"]
})
export class BlogPostsComponent implements OnInit {
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
  handelDelete(post) {
    console.log(post);
    this.postService
      .deletePost(post)
      .then(arrNuevo => (this.arrPost = arrNuevo));
  }

  async ngOnInit() {
    this.arrTransito = await this.postService.getAllPosts();
    // console.log(this.arrTransito["posts"]);
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
