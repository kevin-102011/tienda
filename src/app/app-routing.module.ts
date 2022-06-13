import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent} from "./core/landing-page/landing-page.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {RegisterClientComponent} from "./core/register-client/register-client.component";
import {RegisterGameComponent} from "./core/register-game/register-game.component";
import {ViewClientComponent} from "./core/view-client/view-client.component";
import {ViewGamesComponent} from "./core/view-games/view-games.component";
import {PriceConsolaComponent} from "./core/price-consola/price-consola.component";
import {AlquilerComponent} from "./core/alquiler/alquiler.component";

const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register-client',
    component: RegisterClientComponent
  },
  {
    path: 'register-game',
    component: RegisterGameComponent
  },
  {
    path: 'view-client',
    component: ViewClientComponent
  },
  {
    path: 'view-games',
    component: ViewGamesComponent
  },
  {
    path: 'price-consola',
    component: PriceConsolaComponent
  },
  {
    path: 'alquiler',
    component: AlquilerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
