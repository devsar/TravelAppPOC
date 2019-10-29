import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';
import { WEEKDAYS } from 'src/app/mockdata/weekdays';
import { MONTHS } from 'src/app/mockdata/months';
import { DateProviderService } from 'src/app/services/date-provider/date-provider.service';

@Component({
  selector: 'app-thank-you-body',
  templateUrl: './thank-you-body.component.html',
  styleUrls: ['./thank-you-body.component.scss'],
})
export class ThankYouBodyComponent implements OnInit {

  @Input() inndata: Inn;
  @Input() reservationdata: Reservation;

  constructor(
    private dProvider: DateProviderService,
  ) { }

  ngOnInit() {}

  displayDateIn(): string {
    return  this.dProvider.displayDate(this.reservationdata.dateIn);
  }
  displayDateOut(): string {
    return  this.dProvider.displayDate(this.reservationdata.dateOut);
  }

}
