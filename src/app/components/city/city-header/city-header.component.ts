import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-city-header',
  templateUrl: './city-header.component.html',
  styleUrls: ['./city-header.component.scss'],
})
export class CityHeaderComponent implements OnInit {

  @Input() citydata;

  constructor(private location: Location) { }

  showingInfo = false;

  ngOnInit() {
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  toggleInfo() {
    this.showingInfo = !this.showingInfo;
  }
}
