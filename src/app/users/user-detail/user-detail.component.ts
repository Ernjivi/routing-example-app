import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(Number(params['id']))
        .subscribe(user => this.user = user);
    });
  }

}
