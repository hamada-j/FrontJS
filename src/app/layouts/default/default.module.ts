import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { DefaultComponent } from "./default.component";
import { MatTabsModule } from "@angular/material/tabs";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { ActivityComponent } from "src/app/modules/activity/activity.component";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardService } from "src/app/modules/dashboard.service";
import { HelpComponent } from "src/app/modules/help/help.component";
import { ProductComponent } from "src/app/modules/product/product.component";
import { RegionComponent } from "src/app/modules/region/region.component";
import { CustomerComponent } from "src/app/modules/customer/customer.component";
import { LoginComponent } from "src/app/modules/login/login.component";
import { ColegasComponent } from "src/app/modules/colegas/colegas.component";
import { SupplierComponent } from "src/app/modules/supplier/supplier.component";
import { OrderComponent } from "src/app/modules/order/order.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ActivityComponent,
    OrderComponent,
    ProductComponent,
    CustomerComponent,
    SupplierComponent,
    ColegasComponent,
    HelpComponent,
    RegionComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [DashboardService]
})
export class DefaultModule {}
