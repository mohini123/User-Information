import { Component } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response: any;
  constructor(private userListService:UserListService){}

  public getUserlist() {
    this.userListService.getuserList().
    subscribe((res)=>{
      this.response = res;
      console.log(this.response);    
    })
  }
}
