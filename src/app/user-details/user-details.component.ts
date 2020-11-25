import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/services/user.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userList = [];
  constructor(private userServices: UserServices) {}

  ngOnInit(): void {}
  getUserList() {
    this.userServices.getUser().subscribe((data: any) => {
      console.log(data);
      this.userList = data;
    });
  }
}
