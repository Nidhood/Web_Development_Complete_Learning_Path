import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from "../dummy-users"; // '../' means the parent folder.

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // This is a especial feature of Angular, which allow to us making dynamic content in the component.
  // Automatically, this will be public, so we can access it in the template. We can also make it private, but we need to use a getter to access it in the template.
  // selectedUser = DUMMY_USERS[randomIndex]; // Here we select a random user from the DUMMY_USERS array, which allow us to get all the properties on the user class te be available in the component.

  // Angular provides to us a signal function, which allow us to make a property reactive, so we can update it in the component.
  // Bitwise the state management (Zone.js), we can use the signal function to make a property reactive, so we can update it in the component.
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // Using signals,now we are going to use "computed" method to make the imagePath property reactive, which allow us to update it in the component.
  // So when the selectedUser property is updated, the imagePath property will be updated too by the computed method.
  // Like pass a function to the computed method, this will return the imagePath property, which will be updated when the selectedUser property is updated.
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  // This is a getter, which allow us to access the imagePath property in the component.
  // get imagePath() {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }

  onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // "set" method is a special method provided by the signal function, which allow us to update the selectedUser property.
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
