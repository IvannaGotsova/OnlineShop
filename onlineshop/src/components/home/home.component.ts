import { Component } from '@angular/core';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { Body } from '../body/body.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, Body, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
