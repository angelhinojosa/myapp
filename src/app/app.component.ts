import { Component } from '@angular/core';
import { Product } from './models/product.model';

interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  name = 'Nicolas';

  rockbands: string[] = ['nirvana', 'los prisioneros'];
  

  users: User[] = [
    {
      name: 'Angel',
      age: 37,
      isSingle: false,
      avatar: 'assets/imagenes/img3.jpeg',
    },
    {
      name: 'Nicolas',
      age: 26,
      isSingle: true,
      avatar: 'assets/imagenes/img1.jpg',
    }
  ];

  rockBandName = ' ';


  changeTitle(){
    this.title = 'nuevo título';
  }

  addRockBand(){
    this.rockbands.push(this.rockBandName);
    this.rockBandName = ' ';
  }
  
  empty(){
    this.rockbands = [];
  }

  deleteItem(index: number){
    this.rockbands.splice(index, 1);
  }

  updateItem(index: number){
    this.rockbands[index] = 'se cambio';
  }

}
