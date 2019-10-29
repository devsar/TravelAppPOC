import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-footer',
  templateUrl: './reservation-footer.component.html',
  styleUrls: ['./reservation-footer.component.scss'],
})
export class ReservationFooterComponent implements OnInit {

  @Input() inndata: Inn;
  @Input() reservationdata: Reservation;

  constructor(private router: Router) { }

  ngOnInit() {  }

  go() {
    if (!this.checkErrrors()) {
      this.setCharges();
      this.router.navigateByUrl('/inn/' + this.inndata.id + '/book/pay', { state:
        {
          inndata: this.inndata,
          reservationdata: this.reservationdata
        } });
    }
  }

  // Should return false if no errors are catched and true if there are errors.
  checkErrrors() {
    const huedespesMax: boolean = this.reservationdata.adults + this.reservationdata.children > this.inndata.capacity;
    const huespedesMin: boolean = this.reservationdata.adults < 1;
    const dateIn: boolean = this.reservationdata.dateIn === null || this.reservationdata.dateIn === undefined;
    const dateOut: boolean = this.reservationdata.dateOut === null || this.reservationdata.dateOut === undefined;
    const validDates: boolean = this.reservationdata.dateOut.getTime() <= this.reservationdata.dateIn.getTime();
    return (huespedesMin || huespedesMin || huedespesMax || dateIn || dateOut || validDates);
  }

  setCharges() {
    const oneDay = 1000 * 60 * 60 * 24;
    const reservationDays = (this.reservationdata.dateOut.getTime() - this.reservationdata.dateIn.getTime()) / oneDay;
    this.reservationdata.pricePerNight = this.inndata.price * reservationDays;
    this.reservationdata.platformCharge = this.inndata.price * 0.1;
    this.reservationdata.taxes = 2.25;
  }


}
