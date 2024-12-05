import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ErrorComponent} from "./components/error/error.component";
import {CategoriaComponent} from "./components/categoria/categoria.component";
import {DetallesComponent} from "./components/detalles/detalles.component";

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
    path: 'categoria/:categoria',
    component: CategoriaComponent
  },
  {
    path:'detalles/:id',
    component: DetallesComponent
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
