import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DragonballComponent } from './components/dragonball/dragonball.component';
import { ErrorComponent } from './components/error/error.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailDbComponent } from './components/detail-db/detail-db.component';
import { BannerComponent } from './components/banner/banner.component';
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    DragonballComponent,
    ErrorComponent,
    DetailDbComponent,
    BannerComponent
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
