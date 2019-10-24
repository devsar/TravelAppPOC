import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationHeaderComponent } from 'src/app/components/reservation-header/reservation-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ReservationHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ReservationHeaderComponent
  ]
})
export class ReservationHeaderModule { }
