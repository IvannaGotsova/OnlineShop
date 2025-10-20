export interface Item {
  id: number;
  name: string;
  product: string;
  type: string;
  ingredients: string;
  fragrance: string;
  description: string;
  quantity: number;
  volume: number;
  price: number;
  time: number;
  photo: string;
  showDetails?: boolean;
}
