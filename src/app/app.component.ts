import { Component } from '@angular/core';
import { UserService } from './shared/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [UserService]
})
export class AppComponent {


  title = 'myApp';

  constructor(private userService: UserService) {}
  profile:any=[];

ngOnInit() {
    this.userService.getUser().subscribe(data => {this.profile =JSON.parse(JSON.stringify(data))});
  }



}
