import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReservationPage } from './reservation.page';
import { InnBriefComponent } from 'src/app/components/reservation/inn-brief/inn-brief.component';
import { ReservationDatesComponent } from 'src/app/components/reservation/reservation-dates/reservation-dates.component';
import { ReservationGuestsComponent } from 'src/app/components/reservation/reservation-guests/reservation-guests.component';
import { ReservationFooterComponent } from 'src/app/components/reservation/reservation-footer/reservation-footer.component';
import { ReservationHeaderModule } from '../reservation-header/reservation-header.module';
import { DatePickerModule } from 'ionic4-date-picker';
// tslint:disable-next-line: max-line-length
import { ReservationDateSelectorComponent } from 'src/app/components/reservation/reservation-date-selector/reservation-date-selector.component';


@NgModule({
  declarations: [
    ReservationPage,
    InnBriefComponent,
    ReservationDatesComponent,
    ReservationGuestsComponent,
    ReservationFooterComponent,
    ReservationDateSelectorComponent
  ],
  entryComponents: [ReservationDateSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationHeaderModule,
    DatePickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReservationPage
      }
    ]),
  ],
})
export class ReservationModule { }
