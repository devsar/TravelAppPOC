import { Component, OnInit, Input} from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-reservation-guests',
  templateUrl: './reservation-guests.component.html',
  styleUrls: ['./reservation-guests.component.scss'],
})
export class ReservationGuestsComponent implements OnInit {

  reservationData: Reservation = {
    id: 0,
    dateIn: '',
    dateOut: '',
    pricePerNight: 0,
    platformCharge: 0,
    taxes: 0,
    adults: 0,
    children: 0,
  };

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

  getGuestsQty(): number {
    return this.reservationData.adults + this.reservationData.children;
  }

  addAdultos(): void {
    this.reservationData.adults++;
  }
  removeAdultos(): void {
    if(this.reservationData.adults > 0 ) {
      this.reservationData.adults--;
    }
  }

  addChildren(): void {
    this.reservationData.children++;
  }
  removeChildren(): void {
    if (this.reservationData.children > 0 ) {
      this.reservationData.children--;
    }
  }

  checkErrors(): boolean {
    return this.reservationData.children + this.reservationData.adults > this.inndata.capacity;
  }

}
