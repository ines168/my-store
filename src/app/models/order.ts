export class Order {
  id?: number;
  fullName: string;
  total: number;
  address: string;

  constructor() {
    this.id = 1;
    this.fullName = '';
    this.total = 1;
    this.address = '';
  }
}
