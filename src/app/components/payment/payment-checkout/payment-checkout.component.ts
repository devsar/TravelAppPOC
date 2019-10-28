import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/types/reservation';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss'],
})
export class PaymentCheckoutComponent implements OnInit {

  @Input() reservationdata: Reservation;

  detailsShown = true;
  formShown = false;

  constructor(public alertController: AlertController) { }

  ngOnInit() {}


  async presentAlertPricePerNight() {
    const alert = await this.alertController.create({
      header: 'Precio por noche',
      subHeader: 'info',
      // tslint:disable-next-line: max-line-length
      message: 'Esta es la tarifa que ofrece tu anfitrión por cada noche. Ten en cuenta que puede ser por habitación completa o por persona.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertPlatformCharge() {
    const alert = await this.alertController.create({
      header: 'Cargos de Servicio',
      subHeader: 'info',
      message: 'Cargos administrativos por la utilización de la plataforma de pago online.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertTaxes() {
    const alert = await this.alertController.create({
      header: 'Impuestos',
      subHeader: 'info',
      message: 'Impuestos municipales y estatales por prestación de servicios inmobiliarios.',
      buttons: ['OK']
    });

    await alert.present();
  }

  showDetails() {
    if (!this.detailsShown) {
      this.detailsShown = true;
    }
  }

  hideDetails() {
    if (this.detailsShown) {
      this.detailsShown = false;
    }
  }

  showPaymentForm() {
    if (!this.formShown) {
      this.formShown = true;
    }
  }

  hidePaymentForm() {
    if (this.formShown) {
      this.formShown = false;
    }
  }

}
