import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-reservation-guests',
  templateUrl: './reservation-guests.component.html',
  styleUrls: ['./reservation-guests.component.scss'],
})
export class ReservationGuestsComponent implements OnInit {

  @Output() propagar = new EventEmitter<Reservation>();

  reservationdata: Reservation = {
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
    return this.reservationdata.adults + this.reservationdata.children;
  }

  addAdultos(): void {
    this.reservationdata.adults++;
    this.emitir();
  }
  removeAdultos(): void {
    if(this.reservationdata.adults > 0 ) {
      this.reservationdata.adults--;
    }
    this.emitir();
  }

  addChildren(): void {
    this.reservationdata.children++;
    this.emitir();
  }
  removeChildren(): void {
    if (this.reservationdata.children > 0 ) {
      this.reservationdata.children--;
    }
    this.emitir();
  }

  checkErrors(): boolean {
    return this.reservationdata.children + this.reservationdata.adults > this.inndata.capacity;
  }

  emitir() {
    console.log('emitiendo guests');
    this.propagar.emit(this.reservationdata);
  }

}
