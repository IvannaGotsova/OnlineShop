import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './components/footer.component';
import { Header } from './components/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  template: `
  <app-header></app-header>

   <div class="image-container">
      <img src="assets/Picture.jpg" alt="Image" />
      <img src="assets/Picture.jpg" alt="Image" />
      <img src="assets/Picture.jpg" alt="Image" />
    </div>

  <app-footer></app-footer>
  `
})
export class App {
}

bootstrapApplication(App, {
  providers: [],
});