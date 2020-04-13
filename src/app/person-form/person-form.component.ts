import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonServiceService } from '../person-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  user: Person;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private personService: PersonServiceService) {
    this.user = new Person();
  }
 
  onSubmit() {
    this.personService.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
