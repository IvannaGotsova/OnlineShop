import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-aromaSticks',
  standalone: true,
  imports: [],
  templateUrl: './aromasticks.component.html',
  styleUrl: './aromasticks.component.css'
})
export class AromaSticks {
}

bootstrapApplication(AromaSticks, {
  providers: [],
});
