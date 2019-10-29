import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';
import { Reservation } from 'src/app/types/reservation';
import { DateProviderService } from 'src/app/services/date-provider/date-provider.service';

@Component({
  selector: 'app-reservation-brief',
  templateUrl: './reservation-brief.component.html',
  styleUrls: ['./reservation-brief.component.scss'],
})
export class ReservationBriefComponent implements OnInit {

  @Input() inndata: Inn;
  @Input() reservationdata: Reservation;

  constructor(
    private dProvider: DateProviderService,
  ) { }

  ngOnInit() {}

  displayDateIn(): string {
    return this.dProvider.displayDate(this.reservationdata.dateIn);
  }
  displayDateOut(): string {
    return this.dProvider.displayDate(this.reservationdata.dateOut);
  }

}
