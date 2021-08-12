import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  messageAlert(){
    alert("thanks for Subscribe.")
  }
Url ='https://jsonplaceholder.typicode.com/users'
products():Observable<any>{
  return this.http.get(this.Url)
}


}
