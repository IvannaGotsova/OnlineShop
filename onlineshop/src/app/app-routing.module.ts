import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AromaSticks } from '../components/aromasticks/aromasticks.component';
import { Candles } from '../components/candles/candles.component';
import { Diffusers } from '../components/diffusers/diffusers.component';
import { Others } from '../components/others/others.component';
import { Contacts } from '../components/contacts/contacts.component';
import { AboutUs } from '../components/aboutus/aboutus.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'aromasticks', component: AromaSticks },
  { path: 'candles', component: Candles },
  { path: 'diffusers', component: Diffusers },
  { path: 'others', component: Others },
  { path: 'contacts', component: Contacts },
  { path: 'aboutus', component: AboutUs },
  { path: '*', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
