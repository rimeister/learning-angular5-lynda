// Like modules, built using imports, decorators, and exports 
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root', // Identifies a custom html tag, where the component will be installed, found in index.html
  templateUrl: './app.component.html', // Points to html template
  styles: [
  	`
  		.list-group-item:first-child {
  			border-top-left-radius: 0;
  			border-top-right-radius: 0;
  			border-top: 0;
  		}
  	`
  ]
}) // Don't put semicolon here, will give error

export class AppComponent implements OnInit {

	query: string;
	artists: object; // Defining data types gives you better error control
	currentArtist: object;

	// This is how you update thing after the constructor; value is initialized in constructor, updated here.
	showArtist(item) {
		this.query = item.name;
		item.highlight = !item.highlight;
		this.currentArtist = item;
	}

	// Private variable of type HTTPClient
	constructor( private http: HttpClient ) {
		this.query = '';
		// "Components become more powerful when they allow you to work with data (e.g., data below)"
		// Directives allow you to manipulate the data in order to display it within your template
	}

	ngOnInit(): void { // Void, so of no type request -- get, post, etc.
		this.http.get<Object>('../assets/data.json').subscribe(
			data => {
				this.artists = data;
		}) // Specify the type of 
	}

}
