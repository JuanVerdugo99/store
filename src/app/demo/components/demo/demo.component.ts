import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'platzi-store';
  power = 10;

  items = ['Juan', 'Jasive'];
  
  addItem(){
    this.items.push('Nuevo Item');
  }
  removeItem(index: number){
    this.items.slice(index, 1)
  }

}
