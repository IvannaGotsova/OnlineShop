import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { HttpClient } from '@angular/common/http';
import { DbData } from '../../models/dbData.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diffusers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diffusers.component.html',
  styleUrl: './diffusers.component.css',
})
export class Diffusers {
  items: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<DbData>('assets/db/db.json').subscribe((data) => {
      this.items = data.diffusers.map((item) => ({
        ...item,
        showDetails: false,
      }));
    });
  }
}
