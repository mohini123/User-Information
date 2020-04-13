import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './posts.model';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  /**
   * Getusers list
   * @returns list
   */
  getPosts() {
    return this.http.get<Observable<Post>>(this.postsUrl)
      .pipe(map(res => {
        return res ? res : ''
      }));
  }

}
