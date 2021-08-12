import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent{
  signupForm:FormGroup;
  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";

  constructor(private formbulder:FormBuilder) {
    this.signupForm=formbulder.group({
      'fname':new FormControl(),
      'lname':new FormControl(),
      'gender':new FormControl(),
      'emailid':new FormControl(),
      'userpasseord': new FormControl()
    });
   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.signupForm)
  }

}
