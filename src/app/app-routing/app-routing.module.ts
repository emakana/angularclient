import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from '../person-list/person-list.component';
import { PersonFormComponent } from '../person-form/person-form.component';
 
const routes: Routes = [
  { path: 'users', component: PersonListComponent },
  { path: 'adduser', component: PersonFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
