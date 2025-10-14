import { Component, Input } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h4>ONLINE SHOP</h4>
    </div>
    <div>
      <button (click)="navigateTo('')">Home</button>
      <button (click)="navigateTo('candles')">Candles</button>
      <button (click)="navigateTo('diffusers')">Diffusers</button>
      <button (click)="navigateTo('aromasticks')">Aroma Sticks</button>
      <button (click)="navigateTo('others')">Others</button>
      <button (click)="navigateTo('contacts')">Contacts</button>
      <button (click)="navigateTo('aboutus')">About Us</button>
    </div>
  `,
})
export class Header {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}


