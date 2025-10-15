import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutUs',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutUs {
}

bootstrapApplication(AboutUs, {
  providers: [],
});
