import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchmackings-gallery',
  templateUrl: './matchmackings-gallery.component.html',
  styleUrls: ['./matchmackings-gallery.component.css']
})
export class MatchmackingsGalleryComponent implements OnInit {

  selectedFlag: boolean;

  constructor() { }

  ngOnInit() {
    this.selectedFlag = false
  }

  selected() {
    return this.selectedFlag
  }

}
