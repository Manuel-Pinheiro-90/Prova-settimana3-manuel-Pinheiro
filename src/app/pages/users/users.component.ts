import { Component } from '@angular/core';
import { iUser } from '../../models/i-user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: iUser[]=[];

  constructor(private usersSvc: UserService) { }

  ngOnInit(): void {
    this.usersSvc.getAllUsers().subscribe(users => {
      this.users = users;
    console.log(this.users)

    });


  }




}
