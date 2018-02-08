import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs/Observable';


interface User{
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable()
export class UserService {

  private apiURL: string = `${environment.apiUrl}users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiURL);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiURL}/${id}`);
  }

}
