import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { Item, Items } from '../../../types';
import { ItemComponent } from '../item/item.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {


  constructor(private itemService: ItemsService) {}

  items: Item[] = [];

  ngOnInit() {
    this.itemService
    .getItems('http://localhost:3000/items', {page: 0, perPage: 5})
    .subscribe((itemsExample: Items) => {
      this.items = itemsExample.items;
    });
  }

}
