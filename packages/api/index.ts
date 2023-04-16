export interface Client {
  name: string;
  city: string;
  postcode: string;
  streetNumber: number;
  streetName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  products: Array<Product>;
  client: Client;
  createdAt: Date;
  updatedAt: Date;
}
