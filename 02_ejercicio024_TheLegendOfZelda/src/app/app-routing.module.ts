import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ZeldaComponent} from "./components/zelda/zelda.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: "full"
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'zelda',
    component: ZeldaComponent
  },
  {
    path:'**',
    redirectTo: '/error',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
