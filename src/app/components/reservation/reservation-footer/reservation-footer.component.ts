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

  ngOnInit() {}

  go() {
    if (!this.checkErrrors()) {
      this.router.navigateByUrl('/inn/' + this.inndata.id + '/book/pay', { state:
        {
          inndata: this.inndata,
          reservationdata: this.reservationdata
        } });
    }
  }

  checkErrrors() {
    return this.reservationdata.adults + this.reservationdata.children > this.inndata.capacity;
  }

}
