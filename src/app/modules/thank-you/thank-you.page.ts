import { Component, OnInit } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

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
