import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';
import { WEEKDAYS } from 'src/app/mockdata/weekdays';
import { MONTHS } from 'src/app/mockdata/months';

@Component({
  selector: 'app-reservation-brief',
  templateUrl: './reservation-brief.component.html',
  styleUrls: ['./reservation-brief.component.scss'],
})
export class ReservationBriefComponent implements OnInit {

  @Input() inndata: Inn;
  @Input() reservationdata: Reservation;

  constructor() { }

  ngOnInit() {}

  displayDateIn(): string {
    const dIn = this.reservationdata.dateIn;
    // tslint:disable-next-line: max-line-length
    return WEEKDAYS[dIn.getDay()] + ', ' + dIn.getDate() + ' de ' +  MONTHS[dIn.getMonth()] + ' de ' + dIn.getFullYear();
  }
  displayDateOut(): string {
    const dOut = this.reservationdata.dateOut;
    // tslint:disable-next-line: max-line-length
    return WEEKDAYS[dOut.getDay()] + ', ' + dOut.getDate() + ' de ' +  MONTHS[dOut.getMonth()] + ' de ' + dOut.getFullYear();
  }

}
