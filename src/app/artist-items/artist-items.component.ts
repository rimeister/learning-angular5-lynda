import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artistVar']
})
export class ArtistItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
