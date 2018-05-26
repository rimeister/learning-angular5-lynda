// Like modules, built using imports, decorators, and exports 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Identifies a custom html tag, where the component will be installed, found in index.html
  templateUrl: './app.component.html' // Points to html template
}) // Don't put semicolon here, will give error

export class AppComponent {
  title = 'my App'; // variable, accessible to html. Just a property of the class, I think.
}
