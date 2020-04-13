import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonServiceService {

    private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }
 
  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.usersUrl);
  }
 
  public save(user: Person) {
    return this.http.post<Person>(this.usersUrl, user);
  }

}
