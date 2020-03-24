import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { HighchartsChartModule } from "highcharts-angular";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
// import { WidgetsComponent } from './widgets/widgets.component';
import { AreaComponent } from "./widgets/area/area.component";
import { CardsComponent } from "./widgets/cards/cards.component";
import { PieComponent } from "./widgets/pie/pie.component";
import { TableComponent } from "./widgets/table/table.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BlogFormComponent } from "./widgets/blog-form/blog-form.component";
import { BlogPostsComponent } from "./widgets/blog-posts/blog-posts.component";
import { BlogUsersComponent } from "./widgets/blog-users/blog-users.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardsComponent,
    PieComponent,
    TableComponent,
    BlogFormComponent,
    BlogPostsComponent,
    BlogUsersComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    RouterModule,
    HighchartsChartModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardsComponent,
    PieComponent,
    TableComponent,
    BlogFormComponent,
    BlogPostsComponent,
    BlogUsersComponent
  ]
})
export class SharedModule {}
