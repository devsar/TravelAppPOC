import { Injectable } from '@angular/core';
import { WEEKDAYS } from 'src/app/mockdata/weekdays';
import { MONTHS } from 'src/app/mockdata/months';
import { ReservationDays } from 'src/app/types/reservationdays';

@Injectable({
  providedIn: 'root'
})
export class DateProviderService {

  constructor() { }

  displayDate(inputDate: Date): string {
    // tslint:disable-next-line: max-line-length
    return WEEKDAYS[inputDate.getDay()] + ', ' + inputDate.getDate() + ' de ' +  MONTHS[inputDate.getMonth()] + ' de ' + inputDate.getFullYear();
  }

  getDaysBetweenDates(d1: Date, d2: Date): ReservationDays {
    const oneDay = 1000 * 60 * 60 * 24;
    const r = new ReservationDays();
    if (d1.getTime() > d2.getTime()) {
      r.nights = (d1.getTime() - d2.getTime()) / oneDay;
      r.days = r.nights + 1;
      return r;
    } else if (d2.getTime() > d1.getTime()) {
      r.nights = (d2.getTime() - d1.getTime()) / oneDay;
      r.days = r.nights + 1;
      return r;
    } else {
      r.days = 0;
      r.nights = 0;
      return r;
    }
  }
}
