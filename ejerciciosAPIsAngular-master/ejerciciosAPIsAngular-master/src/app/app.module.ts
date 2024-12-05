import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CharacterComponent } from './pages/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { AgentComponent } from './pages/agent/agent.component';
import { OneCharComponent } from './pages/one-char/one-char.component';
import { WeaponComponent } from './pages/weapon/weapon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AgentsComponent,
    WeaponsComponent,
    CardsComponent,
    CharacterComponent,
    AgentComponent,
    OneCharComponent,
    WeaponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
