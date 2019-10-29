import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tarjeta-ciudad',
  templateUrl: './tarjeta-ciudad.component.html',
  styleUrls: ['./tarjeta-ciudad.component.scss'],
})
export class TarjetaCiudadComponent implements OnInit {

  @Input() citydata;

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async openDescription(event, city: string, state: string, description: string) {
    event.stopPropagation();
    const alert = await this.alertController.create({
      header: city,
      subHeader: 'Estado de ' + state,
      message: description,
      buttons: ['Genial!']
    });

    await alert.present();
  }

}
