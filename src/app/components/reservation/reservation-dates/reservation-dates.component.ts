import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ReservationDateSelectorComponent } from '../reservation-date-selector/reservation-date-selector.component';
import { Reservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-reservation-dates',
  templateUrl: './reservation-dates.component.html',
  styleUrls: ['./reservation-dates.component.scss'],
})
export class ReservationDatesComponent implements OnInit {

  @Output() propagar = new EventEmitter<Reservation>();

  constructor(public popoverController: PopoverController) { }

  reservationdata: Reservation = {
    id: 0,
    pricePerNight: 0,
    taxes: 0,
    platformCharge: 0,
    dateIn: '',
    dateOut: '',
    adults: 0,
    children: 0,
  };

  async presentPopover(ev: any, esInicio: boolean) {
    const popover = await this.popoverController.create({
      component: ReservationDateSelectorComponent,
      event: ev,
      translucent: true,
      componentProps: {
        paramEsInicio: esInicio,
      }
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        if (esInicio) {
          this.reservationdata.dateIn = dataReturned.data;
        } else {
          this.reservationdata.dateOut = dataReturned.data;
        }
        this.emitir();
      }
    });

    return await popover.present();
  }

  ngOnInit() {
    console.log('cargado');
  }

  emitir() {
    console.log('emitiendo dates');
    this.propagar.emit(this.reservationdata);
  }

}
