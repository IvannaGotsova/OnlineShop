import { Component } from '@angular/core';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { Body } from '../body/body.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
