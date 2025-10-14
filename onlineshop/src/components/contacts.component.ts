import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  template: `
       <p>Contacts</p>
  `
})
export class Contacts {
}

bootstrapApplication(Contacts, {
  providers: [],
});
