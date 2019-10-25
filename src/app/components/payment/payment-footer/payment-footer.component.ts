import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/types/reservation';
import { Inn } from 'src/app/types/inn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-footer',
  templateUrl: './payment-footer.component.html',
  styleUrls: ['./payment-footer.component.scss'],
})
export class PaymentFooterComponent implements OnInit {

  @Input() reservationdata: Reservation;
  @Input() inndata: Inn;

  constructor(private router: Router) { }

  ngOnInit() {}

  go() {
    if (!this.checkErrrors()) {
      this.router.navigateByUrl('/inn/' + this.inndata.id + '/book/thank-you', { state:
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
