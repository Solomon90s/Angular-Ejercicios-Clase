import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ErrorComponent } from './component/error/error.component';
import { EldenComponent } from './component/elden/elden.component';
import { HttpClientModule } from "@angular/common/http";
import {BannerComponent} from "./component/banner/banner.component";
import { DetailEldenComponent } from './component/detail-elden/detail-elden.component';
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent,
    EldenComponent,
    BannerComponent,
    BannerComponent,
    DetailEldenComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbPagination,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
