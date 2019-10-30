import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-reservation-date-selector',
  templateUrl: './reservation-date-selector.component.html',
  styleUrls: ['./reservation-date-selector.component.scss'],
})
export class ReservationDateSelectorComponent implements OnInit {

  fechaEntrada: boolean;
  fechaDevuelta: Date;

  selectedDate: Date = new Date();
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().getFullYear() + 1, new Date().getMonth());

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    // console.table(this.navParams);
    this.fechaEntrada = this.navParams.data.paramEsInicio;
  }

  dateSelected(ev: Date) {
    this.fechaDevuelta = ev;
  }

  async closeModal() {
    await this.popoverController.dismiss(this.fechaDevuelta);
  }

  selectedDayStyle() {
    if (this.fechaEntrada) {
      return { 'border-radius': '20px 0 0 20px', 'background': '#da4473', 'color': 'white' };
    } else {
      return { 'border-radius': '0 20px 20px 0', 'background': '#da4473', 'color': 'white' };
    }
  }
}
