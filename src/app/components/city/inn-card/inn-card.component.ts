import { Component, OnInit, Input } from '@angular/core';
import { Inn } from '../../../types/inn';

@Component({
  selector: 'app-inn-card',
  templateUrl: './inn-card.component.html',
  styleUrls: ['./inn-card.component.scss'],
})
export class InnCardComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
