import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Body, Footer, Header],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
