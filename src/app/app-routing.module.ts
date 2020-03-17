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
import { LoginComponent } from "./modules/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "people",
        component: ColegasComponent
      },
      {
        path: "activity",
        component: ActivityComponent
      },
      {
        path: "product",
        component: ProductComponent
      },
      {
        path: "order",
        component: OrderComponent
      },
      {
        path: "region",
        component: RegionComponent
      },
      {
        path: "customer",
        component: CustomerComponent
      },
      {
        path: "supplier",
        component: SupplierComponent
      },
      {
        path: "people",
        component: ColegasComponent
      },
      {
        path: "help",
        component: HelpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
