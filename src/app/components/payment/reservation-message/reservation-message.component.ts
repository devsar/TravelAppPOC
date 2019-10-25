import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-reservation-message',
  templateUrl: './reservation-message.component.html',
  styleUrls: ['./reservation-message.component.scss'],
})
export class ReservationMessageComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
