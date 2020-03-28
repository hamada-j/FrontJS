import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Material
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// componentes
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { ActivityComponent } from "src/app/modules/activity/activity.component";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardService } from "src/app/modules/dashboard.service";
import { HelpComponent } from "src/app/modules/help/help.component";
import { ProductComponent } from "src/app/modules/product/product.component";
import { RegionComponent } from "src/app/modules/region/region.component";
import { CustomerComponent } from "src/app/modules/customer/customer.component";
import { ColegasComponent } from "src/app/modules/colegas/colegas.component";
import { SupplierComponent } from "src/app/modules/supplier/supplier.component";
import { OrderComponent } from "src/app/modules/order/order.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSortModule } from "@angular/material/sort";

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
    RegionComponent
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
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTreeModule,
    MatStepperModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DashboardService]
})
export class DefaultModule {}
