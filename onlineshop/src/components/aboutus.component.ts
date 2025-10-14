import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutUs',
  standalone: true,
  imports: [],
  template: `
       <p>About Us</p>
  `
})
export class AboutUs {
}

bootstrapApplication(AboutUs, {
  providers: [],
});
