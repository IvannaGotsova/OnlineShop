import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Body } from '../components/body/body.component';
import { Footer } from '../components/footer/footer.component';
import { Header } from '../components/header/header.component';

@NgModule({
  declarations: [AppComponent, Body, Footer, Header],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
