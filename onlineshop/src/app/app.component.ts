import { Component } from '@angular/core';
import { Header } from '../components/header/header.component';
import { Footer } from '../components/footer/footer.component';
import { Body } from '../components/body/body.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module.module';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Body, AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlineshop';

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

}
