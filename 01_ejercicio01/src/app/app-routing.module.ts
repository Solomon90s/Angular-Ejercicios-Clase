import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OperacionesComponent} from "./components/operaciones/operaciones.component";
import {VerdurasComponent} from "./components/verduras/verduras.component";

const routes: Routes = [
  {
    // ESTA ES LA RUTA DEL SERVIDOR
    path: '',
    redirectTo: 'verduras',
    pathMatch: 'full'
  },
  {
    path: 'operaciones',
    component: OperacionesComponent
  },
  {
    path: 'verduras',
    component: VerdurasComponent
  },

  {
    // LA RUTA DE ERROR SIEMPRE VA AL FINAL
    path: '**',
    redirectTo: 'verduras',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
