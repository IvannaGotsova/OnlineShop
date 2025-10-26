import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { HttpClient } from '@angular/common/http';
import { DbData } from '../../models/dbData.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.css',
})
export class Candles {
  items: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<DbData>('assets/db/db.json').subscribe((data) => {
      this.items = data.candles.map((item) => ({
        ...item,
        showDetails: false,
      }));
    });
  }
}
