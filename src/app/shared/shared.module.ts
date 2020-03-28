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
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { HighchartsChartModule } from "highcharts-angular";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";

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
import { MessageComponent } from "./widgets/message/message.component";
import { MapsComponent } from "./widgets/maps/maps.component";
///// environmentDEV /////
import { environment } from "src/environments/environment";
///// Google Map /////
import { AgmCoreModule } from "@agm/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { BottomComponent } from './widgets/bottom/bottom.component';
import { BottomTComponent } from './widgets/bottom-t/bottom-t.component';

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
    BlogUsersComponent,
    MessageComponent,
    MapsComponent,
    BottomComponent,
    BottomTComponent
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
    MatBadgeModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    RouterModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey })
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
    BlogUsersComponent,
    MessageComponent,
    MapsComponent
  ]
})
export class SharedModule {}
