import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isValid:boolean= false;

  onCreat(){
    this.isValid= true;

  }
  Product=[
    {proimag:'/../assets/house1.jpg', name:'House', id:'pro01', price:'10000'},
    {proimag:'', name:'house2', id:'pro02', price:'12000'},
    {proimag:'', name:'House3', id:'pro03', price:'13000'},
    {proimag:'', name:'leptop', id:'pro04', price:'25000'}

  ]
}
