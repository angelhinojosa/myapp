import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

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
      price: 200,
      text: 'Un desayuno diferente',
      image: 'assets/imagenes/img2.jpg',
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 200,
      text: 'Desayumo preferido del mes',
      image: 'assets/imagenes/img3.jpeg',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClickedProduct(id: number) {
    console.log('clicked', id);
  }

}
