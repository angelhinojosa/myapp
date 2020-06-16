import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'myapp';
  name = 'Nicolas';

  rockbands: string[] = ['nirvana', 'los prisioneros'];

  ngOnInit(){
    // Code
  }

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
