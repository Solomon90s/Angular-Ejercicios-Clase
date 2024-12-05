import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ValorantComponent } from './components/valorant/valorant.component';
import { HttpClientModule } from "@angular/common/http";
import { MonsterhunterComponent } from './components/monsterhunter/monsterhunter.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FinalspaceComponent } from './components/finalspace/finalspace.component';
import { InfoValorantComponent } from './components/info-valorant/info-valorant.component';
import { InfoMonsterComponent } from './components/info-monster/info-monster.component';
import { InfoPokemonComponent } from './components/info-pokemon/info-pokemon.component';
import { InfoFinalspaceComponent } from './components/info-finalspace/info-finalspace.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    InicioComponent,
    ValorantComponent,
    MonsterhunterComponent,
    PokemonComponent,
    FinalspaceComponent,
    InfoValorantComponent,
    InfoMonsterComponent,
    InfoPokemonComponent,
    InfoFinalspaceComponent,
    PokeapiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
