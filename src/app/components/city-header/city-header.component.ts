import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-header',
  templateUrl: './city-header.component.html',
  styleUrls: ['./city-header.component.scss'],
})
export class CityHeaderComponent implements OnInit {

  @Input() citydata;

  constructor() { }

  ngOnInit() {
  }
}
