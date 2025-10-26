import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { HttpClient } from '@angular/common/http';
import { DbData } from '../../models/dbData.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css',
})
export class Others {
  items: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<DbData>('assets/db/db.json').subscribe((data) => {
      this.items = data.others.map((item) => ({ ...item, showDetails: false }));
    });
  }
}
