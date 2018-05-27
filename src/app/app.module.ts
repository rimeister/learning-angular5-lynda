// Import angular core
import { NgModule } from '@angular/core';

// import the paltform browser
import { BrowserModule } from '@angular/platform-browser';

/* Because Angular is very modular, we need to import 
the FormsModule in order to use ngModel on our form input element. */
import { FormsModule } from '@angular/forms';

// Import HttpClientModule, so we can get data from JSON file
import { HttpClientModule } from '@angular/common/http';

// Import the app component we've created
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Exports module created in this file, is imported in main.ts
export class AppModule { }
