import { Injectable } from '@angular/core';

const USERS: any[] = [
  { id: 1, firstName: 'Ernesto', lastName: 'Jiménez Villaseñor' },
  { id: 2, firstName: 'Salvador', lastName: 'Mora Hubert' },
  { id: 3, firstName: 'Andres', lastName: 'Fleiz Jaso' },
]

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): any[]{
    return USERS
  }

  getUser(id: number){
    return USERS.find(user => user.id === id);
  }

}
