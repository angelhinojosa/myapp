import { Injectable } from '@angular/core';

import { Product } from '@products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      title: 'Producto 1',
      price: 200,
      text: 'Super Desayuno de prueba 1',
      image: 'assets/imagenes/img1.jpg',
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 150,
      text: 'Un desayuno diferente',
      image: 'assets/imagenes/img2.jpg',
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 300,
      text: 'Desayumo preferido del mes',
      image: 'assets/imagenes/img3.jpeg',
    }
  ];


  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(productId: string) {
    console.log(productId);
    return this.products.find(product => product.id === parseInt(productId, 10));
  }
}
