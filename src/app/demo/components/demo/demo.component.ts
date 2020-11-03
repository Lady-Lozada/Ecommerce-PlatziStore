import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  hola = 'hola';
  power = 10;

  objeto = {}; /* Este tipo de objetos no son iterables */
  items = ['Lady', 'Manuel', 'Jhon'];

  addItem(){
    this.items.push('Nuevo Item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
