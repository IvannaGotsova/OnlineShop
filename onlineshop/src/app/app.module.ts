import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppRoutingModuleModule } from './app-routing.module.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModuleModule
  ],
})
export class AppModule {}
