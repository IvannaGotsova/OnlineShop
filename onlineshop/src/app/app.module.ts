import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { Candles } from '../components/candles/candles.component';
import { AromaSticks } from '../components/aromasticks/aromasticks.component';
import { Diffusers } from '../components/diffusers/diffusers.component';
import { Others } from '../components/others/others.component';
import { AboutUs } from '../components/aboutus/aboutus.component';
import { Contacts } from '../components/contacts/contacts.component';
import { Body } from '../components/body/body.component';
import { Footer } from '../components/footer/footer.component';
import { Header } from '../components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Body, 
    Footer, 
    Header,
    Candles,
    AromaSticks,
    Diffusers,
    Others,
    AboutUs,
    Contacts      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
