import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input()productselect: boolean = false;
 @Input()selectedProduct:string="";


  // onAddProduct(){
  //   this.productselect;

  // }

  // onSelectProduct(itemname:String){
  //   this.productselect = true;

  // }

}
