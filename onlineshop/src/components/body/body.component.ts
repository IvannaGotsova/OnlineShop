import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [Header, Footer, CommonModule, RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class Body {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
