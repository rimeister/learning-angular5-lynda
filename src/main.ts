/*****************

The main file which loads everything else in the application.

Because Angular is modular, 
you have to import the features separately 
using `import` statements.

*****************/

// These are in the node_modules folder
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// These are local imports
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
