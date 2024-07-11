import { bootstrapApplication } from '@angular/platform-browser';

// Here we import the components that we want to bootstrap.
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

// ¿What is bootstrapApplication?
// -> bootstrapApplication is a function that receives a component and bootstraps it, which means that it will be rendered in the DOM.

// Here we bootstrap the components.
bootstrapApplication(AppComponent).catch((err) => console.error(err));
bootstrapApplication(HeaderComponent).catch((err) => console.error(err));
