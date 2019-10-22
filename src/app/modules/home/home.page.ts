import { Component } from '@angular/core';
import { Ciudad } from '../../types/ciudad';
import { CiudadesProviderService } from 'src/app/services/ciudades-provider/ciudades-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ciudades: Ciudad[] = [];

  constructor(private cpService: CiudadesProviderService) {}

  getCities(): void {
    this.ciudades = this.cpService.getCities();
  }

}
