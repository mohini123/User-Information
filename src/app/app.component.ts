import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { Post } from './posts.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Observable<Post>;
  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.onGetPosts();
  }

  /**
   * Gets posts
   */
  public onGetPosts(): void {
    this.userListService.getPosts().
      subscribe((post: Observable<Post>) => {
        this.posts = post;
        console.log(this.posts)
      });
  }
}
