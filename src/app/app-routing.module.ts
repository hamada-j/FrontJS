import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ActivityComponent } from "./modules/activity/activity.component";
import { HelpComponent } from "./modules/help/help.component";
import { ColegasComponent } from "./modules/colegas/colegas.component";
import { SupplierComponent } from "./modules/supplier/supplier.component";
import { CustomerComponent } from "./modules/customer/customer.component";
import { RegionComponent } from "./modules/region/region.component";
import { OrderComponent } from "./modules/order/order.component";
import { ProductComponent } from "./modules/product/product.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginGuard } from "./login.guard";

const routes: Routes = [
  { path: "signup", component: SignUpComponent },
  { path: "signin", component: SignInComponent },
  {
    path: "",
    component: DefaultComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: "",
        component: DashboardComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "people",
        component: ColegasComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "activity",
        component: ActivityComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "product",
        component: ProductComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "order",
        component: OrderComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "region",
        component: RegionComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "customer",
        component: CustomerComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "supplier",
        component: SupplierComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "people",
        component: ColegasComponent,
        canActivate: [LoginGuard]
      },
      {
        path: "help",
        component: HelpComponent,
        canActivate: [LoginGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
