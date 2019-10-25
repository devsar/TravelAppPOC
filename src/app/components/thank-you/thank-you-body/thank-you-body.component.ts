import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-thank-you-body',
  templateUrl: './thank-you-body.component.html',
  styleUrls: ['./thank-you-body.component.scss'],
})
export class ThankYouBodyComponent implements OnInit {

  @Input() inndata: Inn;
  @Input() reservationdata: Reservation;

  constructor() { }

  ngOnInit() {}

}
