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
import {AddAlquilerComponent} from "./core/add-alquiler/add-alquiler.component";
import {ImpFactureComponent} from "./core/imp-facture/imp-facture.component";
import {EditClientComponent} from "./core/edits/edit-client/edit-client.component";
import {EditGameComponent} from "./core/edits/edit-game/edit-game.component";

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
  },
  {
    path: 'add-alquiler/:invoiceId/:videoGameId',
    component: AddAlquilerComponent
  },
  {
    path: 'imp-facture/:invoiceId',
    component: ImpFactureComponent
  },
  {
    path: 'edit-client/:personId',
    component: EditClientComponent
  },
  {
    path: 'edit-game/:videoGameId',
    component: EditGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
