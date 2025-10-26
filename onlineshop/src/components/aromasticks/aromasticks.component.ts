import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { HttpClient } from '@angular/common/http';
import { DbData } from '../../models/dbData.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aromaSticks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aromasticks.component.html',
  styleUrl: './aromasticks.component.css',
})
export class AromaSticks {
  items: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<DbData>('assets/db/db.json').subscribe((data) => {
      this.items = data.aromasticks.map((item) => ({
        ...item,
        showDetails: false,
      }));
    });
  }
}
