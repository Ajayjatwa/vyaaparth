import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-js',
  templateUrl: './node-js.component.html',
  styleUrls: ['./node-js.component.css']
})
export class NodeJsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
