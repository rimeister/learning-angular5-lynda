// Like modules, built using imports, decorators, and exports 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Identifies a custom html tag, where the component will be installed, found in index.html
  template: `
	<div class="row justify-content-center">
	  <div class="card mt-sm-3 col-md-8">
	    <div class="card-body">
	      <h3 class="mb-0">Artist Directory</h3>
	      <div class="form-group">
	        <div class="form-label"></div>
	        <input class="form-control mt-2" type="text">
	      </div><!-- form-group -->
	    </div><!-- card-body -->
	  </div><!-- card -->
	</div><!-- row -->
  `, // Points to html template
  styleUrls: ['./app.component.css']
}) // Don't put semicolon here, will give error

export class AppComponent {
  title = 'my App'; // variable, accessible to html. Just a property of the class, I think.
}
