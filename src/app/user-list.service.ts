import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  getuserList():Observable<any> {
    const localUrl:string = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(localUrl);
  }

}
