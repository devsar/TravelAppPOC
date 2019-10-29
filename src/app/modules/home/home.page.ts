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
  }

  updateCities(data: Ciudad[]) {
    this.ciudades = data;
  }
}
