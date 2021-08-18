import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showtab:boolean =false;
  hidetabe:boolean =true;
  morechange(){
    this.showtab = true;
  }
  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;

  div1Function(){
    this.div1=!this.div1;
    this.div2=false;
    this.div3=false;
  }
  div2Function(){
    this.div2=!this.div2;
    this.div1=false;
    this.div3=false;
  }
  div3Function(){
    this.div3=!this.div3;
    this.div2=false;
    this.div1=false;
  }

}
