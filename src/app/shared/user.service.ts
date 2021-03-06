import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/`);
  }

}



