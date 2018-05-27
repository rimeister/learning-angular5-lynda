import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  inputs: ['artistVar']
})
export class ArtistDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
