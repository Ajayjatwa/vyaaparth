import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _msgService:UserService) { }

  products:any=[];
  ngOnInit(): void {
    this._msgService.products().subscribe(productData => this.products = productData)
      }

  btmClick(){
    this._msgService.messageAlert();
  }



}
