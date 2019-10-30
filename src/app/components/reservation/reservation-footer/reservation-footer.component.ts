import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';
import { Router } from '@angular/router';
import { DateProviderService } from 'src/app/services/date-provider/date-provider.service';

@Component({
  selector: 'app-reservation-footer',
  templateUrl: './reservation-footer.component.html',
  styleUrls: ['./reservation-footer.component.scss'],
})
export class ReservationFooterComponent implements OnInit {

  @Input() inndata: Inn;
  @Input() reservationdata: Reservation;

  constructor(
    private router: Router,
    private dProvider: DateProviderService) { }

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
    let invalidDates = true;
    if (!dateIn && !dateOut) {
      invalidDates = this.reservationdata.dateOut.getTime() <= this.reservationdata.dateIn.getTime();
    }
    return (huespedesMin || huespedesMin || huedespesMax || dateIn || dateOut || invalidDates);
  }

  setCharges() {
    // tslint:disable-next-line: max-line-length
    this.reservationdata.pricePerNight = this.inndata.price * this.dProvider.getDaysBetweenDates(this.reservationdata.dateIn, this.reservationdata.dateOut).nights;
    this.reservationdata.platformCharge = this.inndata.price * 0.1;
    this.reservationdata.taxes = 2.25;
  }


}
