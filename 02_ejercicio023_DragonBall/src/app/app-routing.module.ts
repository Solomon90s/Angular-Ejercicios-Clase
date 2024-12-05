import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {DragonballComponent} from "./components/dragonball/dragonball.component";
import {ErrorComponent} from "./components/error/error.component";
import {DetailDbComponent} from "./components/detail-db/detail-db.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  },
  {
    path:'detail-db/:id',
    component: DetailDbComponent
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
