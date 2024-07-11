import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',                   // Which element this component is responsible for (Important: Needs to be unique, thats why we use app-header).
  standalone: true,                         // This component is not part of another component, which means it is a standalone component.
  templateUrl: './header.component.html',
  imports: [
    NgOptimizedImage
  ],
  // The HTML file that is responsile for this component, is better to use relative path ('./' means the same folder).
  styleUrls: ['./header.component.css']     // The CSS file that is responsible for this component, is better to use relative path ('./' means the same folder).
})

export class HeaderComponent {}

