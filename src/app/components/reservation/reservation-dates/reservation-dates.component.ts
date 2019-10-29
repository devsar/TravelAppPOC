import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ReservationDateSelectorComponent } from '../reservation-date-selector/reservation-date-selector.component';
import { Reservation } from 'src/app/types/reservation';
import { DateProviderService } from 'src/app/services/date-provider/date-provider.service';

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

  reservationdata: Reservation = {
    id: 0,
    pricePerNight: 0,
    taxes: 0,
    platformCharge: 0,
    dateIn: new Date(),
    dateOut: new Date(),
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
          this.displayDateIn = this.dProvider.displayDate(this.reservationdata.dateIn);
        } else {
          this.reservationdata.dateOut = dataReturned.data;
          this.displayDateOut = this.dProvider.displayDate(this.reservationdata.dateOut);
        }
        this.emitir();
      }
    });

    return await popover.present();
  }

  ngOnInit() {
  }

  emitir() {
    this.propagar.emit(this.reservationdata);
  }

}
