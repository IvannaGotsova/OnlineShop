import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from '../main';
import { AromaSticks } from '../components/aromasticks.component';
import { Candles } from '../components/candles.component';
import { Diffusers } from '../components/diffusers.component';
import { Others } from '../components/others.component';
import { Contacts } from '../components/contacts.component';
import { AboutUs } from '../components/aboutus.component';


const routes: Routes = [
  { path: '', component: App },
  { path: 'aromasticks', component: AromaSticks },
  { path: 'candles', component: Candles },
  { path: 'diffusers', component: Diffusers },
  { path: 'others', component: Others },
  { path: 'contacts', component: Contacts },
  { path: 'aboutus', component: AboutUs },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
