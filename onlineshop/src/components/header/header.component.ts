import { Component, Input } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app/app-routing.module.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppRoutingModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}


