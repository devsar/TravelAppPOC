import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ReservationDateSelectorComponent } from '../reservation-date-selector/reservation-date-selector.component';
import { Reservation } from 'src/app/types/reservation';
import { DateProviderService } from 'src/app/services/date-provider/date-provider.service';
import { ReservationDays } from 'src/app/types/reservationdays';

@Component({
  selector: 'app-reservation-dates',
  templateUrl: './reservation-dates.component.html',
  styleUrls: ['./reservation-dates.component.scss'],
})
export class ReservationDatesComponent implements OnInit {

  @Output() propagar = new EventEmitter<Reservation>();

  constructor(
    public popoverController: PopoverController,
    private dProvider: DateProviderService,
    ) { }

  displayDateIn: string;
  displayDateOut: string;
  displayReservationDays: ReservationDays;

  reservationdata: Reservation = {
    id: 0,
    pricePerNight: 0,
    taxes: 0,
    platformCharge: 0,
    dateIn: null,
    dateOut: null,
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
      if (dataReturned !== null && dataReturned.data !== undefined) {
        this.updateDateDisplayData(dataReturned, esInicio);
      }
    });

    return await popover.present();
  }

  ngOnInit() {
  }

  emitir() {
    this.propagar.emit(this.reservationdata);
  }
  
  updateDateDisplayData(dataReturned: any, esInicio: boolean) {
    // Actualizamos los string que se muestran de cada fecha seleccionada
    if (esInicio) {
      this.reservationdata.dateIn = dataReturned.data;
      this.displayDateIn = this.dProvider.displayDate(this.reservationdata.dateIn);
    } else {
      this.reservationdata.dateOut = dataReturned.data;
      this.displayDateOut = this.dProvider.displayDate(this.reservationdata.dateOut);
    }

    // Si hay ambas fechas seleccionadas, actualizamos la cantidad de noches y dias
    // Estos ifs deben ir anidados, no se pueden juntar porque da error si alguna data es null o undefined
    if (this.reservationdata.dateIn && this.reservationdata.dateOut) {
      if (this.reservationdata.dateOut.getTime() > this.reservationdata.dateIn.getTime()) {
        this.displayReservationDays = this.dProvider.getDaysBetweenDates(this.reservationdata.dateOut, this.reservationdata.dateIn);
      }
    }
    this.emitir();
  }


}
