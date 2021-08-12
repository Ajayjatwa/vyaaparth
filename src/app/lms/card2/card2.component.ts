import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService:UserService) { }

  ngOnInit(): void {
  }
  btmClick(){
    this._msgService.messageAlert();
  }

}
