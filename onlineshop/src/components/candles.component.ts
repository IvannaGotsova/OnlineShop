import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-candles',
  standalone: true,
  imports: [],
  template: `
       <p>Candles</p>
  `
})
export class Candles {
}

bootstrapApplication(Candles, {
  providers: [],
});
