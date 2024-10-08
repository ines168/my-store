export class Product {
  id?: number;
  name: string;
  price: number;
  category?: string;
  url?: string;
  description?: string;
  quantity?: number;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 1;
    this.category = '';
    this.url = '';
    this.description = '';
    this.quantity = 1;
  }
}
