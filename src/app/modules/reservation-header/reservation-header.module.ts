import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationHeaderComponent } from 'src/app/components/reservation-header/reservation-header.component';



@NgModule({
  declarations: [ReservationHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ReservationHeaderComponent
  ]
})
export class ReservationHeaderModule { }
