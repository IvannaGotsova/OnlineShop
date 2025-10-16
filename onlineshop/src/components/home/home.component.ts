import { Component } from '@angular/core';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { Body } from '../body/body.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app/app-routing.module.module';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Body, AppRoutingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
