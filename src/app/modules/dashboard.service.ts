import { Injectable } from "@angular/core";
import { RestApiService } from "../api.service";
import { Product } from "../model/product";
import { HttpClient } from "@angular/common/http";
import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { merge, Observable, of as observableOf } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  arrProducts: Product[];
  constructor(private Api: RestApiService, private _httpClient: HttpClient) {}

  getArray() {
    this.Api.getAll()
      .then(arrProd => {
        arrProd = this.arrProducts;
        console.log(this.arrProducts);
      })
      .catch(err => {
        console.log(err);
      });
  }

  bigChart() {
    return [
      {
        name: "Orders",
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      },
      {
        name: "Customers",
        data: [106, 107, 111, 133, 221, 767, 1766]
      },
      {
        name: "Suppliers",
        data: [163, 203, 276, 408, 547, 729, 628]
      },
      {
        name: "Employee",
        data: [4000, 31, 54, 156, 339, 818, 1201]
      },
      {
        name: "JS.io Facturation",
        data: [2, 2, 2, 6, 13, 30, 46]
      }
    ];
  }

  cards() {
    return [71, 63, 39, 87];
  }
  cards1() {
    return [2, 50, 20, 71];
  }
  cards2() {
    return [10, 20, 39, 57];
  }
  pieChart() {
    return [
      {
        name: "Orders",
        y: 61.41,
        sliced: true,
        selected: true
      },
      {
        name: "Orders Pending",
        y: 11.84
      },
      {
        name: "Special Orders",
        y: 10.85
      },
      {
        name: "Order Canceled",
        y: 4.67
      },
      {
        name: "Others",
        y: 11.59
      }
      // {
      //   name: "Sogou Explorer",
      //   y: 1.64
      // },
      // {
      //   name: "Opera",
      //   y: 1.6
      // },
      // {
      //   name: "QQ",
      //   y: 1.2
      // },
      // {
      //   name: "Other",
      //   y: 2.61
      // }
    ];
  }

  getRepoIssues(
    sort: string,
    order: string,
    page: number
  ): Observable<GithubApi> {
    const href = "https://api.github.com/search/issues";
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page +
      1}`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}
export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
