import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class Footer {
  @Input() title: string = 'Online Shop';
  @Input() year: number = new Date().getFullYear();
}
