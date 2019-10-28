import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inn-header',
  templateUrl: './inn-header.component.html',
  styleUrls: ['./inn-header.component.scss'],
})
export class InnHeaderComponent implements OnInit {

  @Input() inndata: Inn;

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
