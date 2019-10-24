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
    this.emitir();
  }
  removeAdultos(): void {
    if(this.reservationData.adults > 0 ) {
      this.reservationData.adults--;
    }
    this.emitir();
  }

  addChildren(): void {
    this.reservationData.children++;
    this.emitir();
  }
  removeChildren(): void {
    if (this.reservationData.children > 0 ) {
      this.reservationData.children--;
    }
    this.emitir();
  }

  checkErrors(): boolean {
    return this.reservationData.children + this.reservationData.adults > this.inndata.capacity;
  }

  emitir() {
    console.log("emitiendo");
    this.propagar.emit(this.reservationData);
  }

}
