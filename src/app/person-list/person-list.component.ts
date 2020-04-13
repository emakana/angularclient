import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

 users: Person[];
 
  constructor(private personService: PersonServiceService) {
  }
 
  ngOnInit() {
    this.personService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
