import { Component, Input } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
       <p>&copy; {{ title }} - {{ year }}</p>
  `
})
export class Footer {
    @Input() title: string = 'Online Shop';
    @Input() year: number = new Date().getFullYear();
}
