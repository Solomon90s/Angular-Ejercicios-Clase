import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FriosComponent } from './components/frios/frios.component';
import { CalientesComponent } from './components/calientes/calientes.component';
import {HttpClientModule} from "@angular/common/http";
import { OperadoresComponent } from './components/operadores/operadores.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { OrdenSuperiorComponent } from './components/orden-superior/orden-superior.component';
import { ForkJoinComponent } from './components/fork-join/fork-join.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FriosComponent,
    CalientesComponent,
    OperadoresComponent,
    SwitchMapComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    OrdenSuperiorComponent,
    ForkJoinComponent,
    ListaCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
