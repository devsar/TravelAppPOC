import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-reservation-date-selector',
  templateUrl: './reservation-date-selector.component.html',
  styleUrls: ['./reservation-date-selector.component.scss'],
})
export class ReservationDateSelectorComponent implements OnInit {

  fechaEntrada: boolean;
  dateReturned = '';

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    // console.table(this.navParams);
    this.fechaEntrada = this.navParams.data.paramEsInicio;
  }

  dateSelected(ev: any) {
    this.fechaEntrada = ev;
  }

  async closeModal() {
    await this.popoverController.dismiss(this.fechaEntrada);
  }

}
