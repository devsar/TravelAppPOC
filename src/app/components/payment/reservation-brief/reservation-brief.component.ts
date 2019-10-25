import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';

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

}
