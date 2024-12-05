import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ErrorComponent} from "./components/error/error.component";
import {ValorantComponent} from "./components/valorant/valorant.component";
import {MonsterhunterComponent} from "./components/monsterhunter/monsterhunter.component";
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import {FinalspaceComponent} from "./components/finalspace/finalspace.component";
import {InfoValorantComponent} from "./components/info-valorant/info-valorant.component";
import {InfoMonsterComponent} from "./components/info-monster/info-monster.component";
import {InfoPokemonComponent} from "./components/info-pokemon/info-pokemon.component";
import {InfoFinalspaceComponent} from "./components/info-finalspace/info-finalspace.component";
import {PokeapiComponent} from "./components/pokeapi/pokeapi.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'inicio',
    component:InicioComponent
  },
  {
    path: 'info',
    component: ValorantComponent
  },
  {
    path: 'monsterhunter',
    component: MonsterhunterComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path: 'finalspace',
    component: FinalspaceComponent
  },
  {
    path: 'pokeapi',
    component: PokeapiComponent
  },
  {
    path: 'info-valorant/:id',
    component: InfoValorantComponent
  },
  {
    path: 'info-monster/:id',
    component: InfoMonsterComponent
  },
  {
    path: 'info-pokemon/:id',
    component: InfoPokemonComponent
  },
  {
    path: 'info-finalspace/:id',
    component: InfoFinalspaceComponent
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
