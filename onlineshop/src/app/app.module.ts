import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { Candles } from '../components/candles/candles.component';
import { AromaSticks } from '../components/aromasticks/aromasticks.component';
import { Diffusers } from '../components/diffusers/diffusers.component';
import { Others } from '../components/others/others.component';
import { AboutUs } from '../components/aboutus/aboutus.component';
import { Contacts } from '../components/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    Candles,
    AromaSticks,
    Diffusers,
    Others,
    AboutUs,
    Contacts
  ],
  imports: [
    BrowserModule,
    RouterModule,       
    AppRoutingModule      
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
