import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
  ],
  providers: [UserService]
})
export class UsersModule { }
