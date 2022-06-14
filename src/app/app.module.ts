import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { RegisterClientComponent } from './core/register-client/register-client.component';
import { RegisterGameComponent } from './core/register-game/register-game.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ViewClientComponent } from './core/view-client/view-client.component';
import { EditClientComponent } from './core/edits/edit-client/edit-client.component';
import { EditGameComponent } from './core/edits/edit-game/edit-game.component';
import { ViewGamesComponent } from './core/view-games/view-games.component';
import { HttpClientModule } from '@angular/common/http';
import { PriceConsolaComponent } from './core/price-consola/price-consola.component';
import { AlquilerComponent } from './core/alquiler/alquiler.component';
import { AddAlquilerComponent } from './core/add-alquiler/add-alquiler.component';
import { ImpFactureComponent } from './core/imp-facture/imp-facture.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    RegisterClientComponent,
    RegisterGameComponent,
    ViewClientComponent,
    EditClientComponent,
    EditGameComponent,
    ViewGamesComponent,
    PriceConsolaComponent,
    AlquilerComponent,
    AddAlquilerComponent,
    ImpFactureComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
