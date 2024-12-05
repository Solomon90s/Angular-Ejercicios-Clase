import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {FriosComponent} from "./components/frios/frios.component";
import {CalientesComponent} from "./components/calientes/calientes.component";
import {OperadoresComponent} from "./components/operadores/operadores.component";
import {SwitchMapComponent} from "./components/switch-map/switch-map.component";
import {SubjectComponent} from "./components/subject/subject.component";
import {OrdenSuperiorComponent} from "./components/orden-superior/orden-superior.component";
import {BehaviorSubjectComponent} from "./components/behavior-subject/behavior-subject.component";
import {ListaCompraComponent} from "./components/lista-compra/lista-compra.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'frios',
    component: FriosComponent
  },
  {
    path: 'calientes',
    component: CalientesComponent
  },
  {
    path: 'operadores',
    component: OperadoresComponent
  },
  {
    path: 'switchmap',
    component: SwitchMapComponent
  },
  {
    path: 'orden-superior',
    component: OrdenSuperiorComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'bahaviour-subject',
    component: BehaviorSubjectComponent
  },
  {
    path: 'lista-compra',
    component: ListaCompraComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
