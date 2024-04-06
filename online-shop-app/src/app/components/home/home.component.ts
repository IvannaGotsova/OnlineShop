import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { Items } from '../../../types';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit{

  httpClient = inject(HttpClient);

  constructor(private itemService: ItemsService) {}

  ngOnInit() {
    this.itemService
    .getItems('http://localhost:3000/items', {page: 0, perPage: 5})
    .subscribe((itemsExample: Items) => {
      console.log(itemsExample.items);
    });
  }
}
