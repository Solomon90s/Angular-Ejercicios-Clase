import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./component/inicio/inicio.component";
import {ErrorComponent} from "./component/error/error.component";
import {EldenComponent} from "./component/elden/elden.component";
import {DetailEldenComponent} from "./component/detail-elden/detail-elden.component";

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
    path: 'elden',
    component: EldenComponent
  },
  {
    path: 'detail-elden/:id',
    component: DetailEldenComponent
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
