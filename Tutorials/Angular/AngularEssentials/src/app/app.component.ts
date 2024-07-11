import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import {UserComponent} from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],             // Here we import the HeaderComponent, so we can use it in the template.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularEssentials';
}
