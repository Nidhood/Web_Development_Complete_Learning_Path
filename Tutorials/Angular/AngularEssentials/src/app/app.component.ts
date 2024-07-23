import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
// import {UserComponent} from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import {FlexUserComponent} from "./flex-user/flex-user.component";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FlexUserComponent, TasksComponent],             // Here we import the HeaderComponent, so we can use it in the template.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS; // Here we pass the DUMMY_USERS array to the users property, so we can use it in the template.

  // Here we pass the id of the selected user to the selectedUserId property, so we can use it in the template.
  selectedUserId ?: string;

  // Here, we are going to propose a getter function, to dynamically get the selected user by the id.
  get selectedUser() {

    // "find()" method is a special method provided by the users array, which allow us to find a user by the id.
    return this.users.find( (user) => user.id === this.selectedUserId)!;
    // Very important annotation: "!" means that the selectedUser property will never be null, so we can use it in the template.
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
