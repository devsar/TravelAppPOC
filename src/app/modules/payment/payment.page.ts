import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-payment.page',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  // state$: Observable<object>;
  inndata: Inn;
  reservationdata: Reservation;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.state$ = this.activatedRoute.paramMap
    //   .pipe(map(() => window.history.state));
    this.activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe(val => {
      this.inndata = val.inndata;
      this.reservationdata = val.reservationdata;
    });
  }

}
