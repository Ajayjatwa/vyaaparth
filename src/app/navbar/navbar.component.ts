import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
showDeta($event:any){
  console.log("button is clicked");
  if ($event){
    console.log($event.target);
    console.log($event.target.value);
  }
}
myDeta:string="";
onclickme(){
  this.myDeta="Product add in card";
}
uname:string="Ajay";
}
