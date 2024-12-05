import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./components/error/error.component";
import {SouthparkComponent} from "./components/southpark/southpark.component";
import {InicioComponent} from "./components/inicio/inicio.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'southpark',
    component: SouthparkComponent
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
