import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {OneMarvelComponent} from "./componentes/one-marvel/one-marvel.component";
import {MarvelsComponent} from "./componentes/marvels/marvels.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'marvels',
    component:MarvelsComponent
  },
  {
    path:'getOne/:id',
    component:OneMarvelComponent
  },
  {
    path:'**',
    redirectTo:"home",
    pathMatch:"full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
