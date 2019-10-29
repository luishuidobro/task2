import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../shared/models/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image1= './img/logo.png';
  public user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
