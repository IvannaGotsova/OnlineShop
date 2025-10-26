import { Item } from './item.model';

export interface DbData {
  candles: Item[];
  diffusers: Item[];
  aromasticks: Item[];
  others: Item[];
}
