import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-diffusers',
  standalone: true,
  imports: [],
  templateUrl: './diffusers.component.html',
  styleUrl: './diffusers.component.css'
})
export class Diffusers {
}

bootstrapApplication(Diffusers, {
  providers: [],
});
