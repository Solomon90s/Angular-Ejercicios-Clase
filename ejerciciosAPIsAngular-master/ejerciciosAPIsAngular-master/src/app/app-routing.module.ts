import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './pages/agents/agents.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CharacterComponent } from './pages/character/character.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import {AgentComponent} from "./pages/agent/agent.component";
import {OneCharComponent} from "./pages/one-char/one-char.component";
import {WeaponComponent} from "./pages/weapon/weapon.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:'/agents',
    pathMatch:'full'
  },
  {
    path: 'agents',
    component: AgentsComponent
  },
  {
    path: 'agent/:uuid',
    component: AgentComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'card/:id',
    component: OneCharComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'weapons',
    component: WeaponsComponent
  },
  {
    path: 'weapon/:id',
    component: WeaponComponent
  },
{
  path:'**',
  redirectTo:'/agents'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
