import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HenriqueCurrencyComponent } from './henrique-currency/henrique-currency.component';
import { HenriqueWalletComponent } from './henrique-wallet/henrique-wallet.component';


const routes: Routes = [

  {path: 'cotacao', component: HenriqueCurrencyComponent},
  {path: 'carteira', component: HenriqueWalletComponent},


]




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HenriqueCurrencyComponent,
    HenriqueWalletComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
