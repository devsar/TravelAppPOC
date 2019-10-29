import { Injectable } from '@angular/core';
import { WEEKDAYS } from 'src/app/mockdata/weekdays';
import { MONTHS } from 'src/app/mockdata/months';

@Injectable({
  providedIn: 'root'
})
export class DateProviderService {

  constructor() { }

  displayDate(inputDate: Date): string {
    // tslint:disable-next-line: max-line-length
    return WEEKDAYS[inputDate.getDay()] + ', ' + inputDate.getDate() + ' de ' +  MONTHS[inputDate.getMonth()] + ' de ' + inputDate.getFullYear();
  }
}
