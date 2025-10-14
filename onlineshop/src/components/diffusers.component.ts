import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-diffusers',
  standalone: true,
  imports: [],
  template: `
       <p>Diffusers</p>
  `
})
export class Diffusers {
}

bootstrapApplication(Diffusers, {
  providers: [],
});
