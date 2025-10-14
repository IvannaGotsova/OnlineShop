import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-aromaSticks',
  standalone: true,
  imports: [],
  template: `
       <p>Aroma Sticks</p>
  `
})
export class AromaSticks {
}

bootstrapApplication(AromaSticks, {
  providers: [],
});
