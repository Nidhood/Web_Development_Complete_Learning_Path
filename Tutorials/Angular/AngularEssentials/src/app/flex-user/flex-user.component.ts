
// Now, we're going to use the Input decorator to pass the selectedUser property from the UserComponent to the FlexUserComponent.
import { Component, Input, Output, input, computed, output, EventEmitter } from '@angular/core';

// TypeScript allows us to define the type of the object, so we can use it in the component.
// type User = { id: string; avatar: string; name: string; };

// We can also define the type of the object using the interface keyword, which is a feature provided by TypeScript.
interface User {
  id: string;
  avatar: string;
  name: string;
}

// If 'type' and 'interface' are similar, why should we use one of them?
// -> The main difference between 'type' and 'interface' is that 'type' is more flexible than 'interface', because we can use it to define unions, intersections, and tuples.
// -> But in the otherwise, 'interface' is more powerful than 'type', because we can use it to define classes, so we can use it to define objects with methods and properties.

@Component({
  selector: 'app-flex-user',
  standalone: true,
  imports: [],
  templateUrl: './flex-user.component.html',
  styleUrl: './flex-user.component.css'
})
export class FlexUserComponent {

  // Here we use the Input decorator to pass the selectedUser property from the UserComponent to the FlexUserComponent.
  // @Input({required: true}) avatar!: string; // This a property of TypeScript, which allow us to pass the selectedUser property from the UserComponent to the FlexUserComponent.
  // The '!' means that the property will be initialized later, so we need to use the ngOnInit method to initialize it.

  // Inside the Input decorator, we can specify a property object with the required, default, and type properties.
  // @Input({required: true}) name!: string;

  // @Input({required: true}) id!: string;

  @Input({required: true}) user!: User; // Here we are using the type of the object, so we can use it in the component.

    // {

    // Like any object we can define the properties of the object, bitwise the Input decorator, but with the difference that we can define the default value of the property.
    // id: string;
    // avatar: string;
    // name: string;
  // };

  // With the input function, we can define the properties of the component, bitwise the Input decorator, but with the difference that we can define the default value of the property.
  // This form, is only in readable mode, so we can't modify the value of the property.
  // avatar = input<string>();
  // name = input();

  // With the output function, we can define the events of the component, bitwise the Output decorator.
  @Output() select = new EventEmitter<string>(); // Adding the type of the event, we add security to the code.

  // Despite using de decorator Output, we can use the output function to define the events of the component.
  // The difference is that we can define the type of the event.
  // select = output<string>();
  imagePath = computed(() => {
    return `assets/users/${this.user.avatar}`;
  });

  // Methods:
  onSelectedUser() {

    // Using Output decorator, now we can emit the select event to the UserComponent.
    this.select.emit(this.user.id);
  }

}
