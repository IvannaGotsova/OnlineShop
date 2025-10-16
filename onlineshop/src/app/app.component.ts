import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module.module';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [AppRoutingModule, HomeComponent],
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
