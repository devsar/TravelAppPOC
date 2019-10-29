import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../types/ciudad';
import { CiudadesProviderService } from 'src/app/services/ciudades-provider/ciudades-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  ciudades: Ciudad[] = [];

  searchbar = document.querySelector('ion-searchbar');

  constructor(private cpService: CiudadesProviderService) {}

  getCities(): void {
    this.ciudades = this.cpService.getCities();
  }

  ngOnInit() {
    setTimeout(() => {
      this.getCities();
    }, 1000);

    let d = new Date('Wed Oct 02 2019 00:00:00 GMT-0300 (hora estándar de Argentina)');
    console.log(d);
    console.log(typeof(d));
    console.log(d.getFullYear() + ' ' + d.getDate() + ' ' + d.getMonth());
  }

  updateCities(data: Ciudad[]) {
    console.log(data);
    this.ciudades = data;
  }
}
