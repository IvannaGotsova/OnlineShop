import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AromaSticks } from '../components/aromasticks/aromasticks.component';
import { Candles } from '../components/candles/candles.component';
import { Diffusers } from '../components/diffusers/diffusers.component';
import { Others } from '../components/others/others.component';
import { Contacts } from '../components/contacts/contacts.component';
import { AboutUs } from '../components/aboutus/aboutus.component';
import { Body } from '../components/body/body.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aromasticks', component: AromaSticks },
  { path: 'candles', component: Candles },
  { path: 'diffusers', component: Diffusers },
  { path: 'others', component: Others },
  { path: 'contacts', component: Contacts },
  { path: 'aboutus', component: AboutUs },
  { path: '**', component: HomeComponent }
];

@Component({
  selector: 'app-root',
  imports: [Body, RouterModule],
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

