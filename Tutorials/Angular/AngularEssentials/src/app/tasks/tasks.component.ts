import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  // Here we have the '?' symbol, which means that the name property is optional, so we can use it in the template.
  // Very important statement: If we don't use the '?' symbol, we will get an error in the template, because the name property is not required.
  // But also, we need to assure this property will mustn't be obligatory to set it in the component, so we can use the '?' symbol.
  // @Input() name?: string;

  // Another important feature that provide us TypeScript is the union operator '|', which allow us to set multiple types to a property.
  // So basically, we can set the name property as a string or undefined, depending on the situation and avoiding errors.
  @Input() name : string | undefined; // Can hold a string or undefined value.

  // We can also admits objects as Inputs & Adding appropriate types to the properties.

}
