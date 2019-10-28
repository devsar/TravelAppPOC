import { Injectable } from '@angular/core';
import { Ciudad } from '../../types/ciudad';
import { CIUDADES } from '../../mockdata/mockcities';

@Injectable({
  providedIn: 'root'
})
export class CiudadesProviderService {

  CIUDADESDEVOLVER = CIUDADES;

  constructor() { }

  getCities(): Ciudad[] {
    return this.CIUDADESDEVOLVER;
  }

  getCity(slug: string): Ciudad {
    return this.CIUDADESDEVOLVER.find((el) => el.slug === slug);
  }

  filterCities(slug: string): Ciudad[] {
    const devolver: Ciudad[] = [];
    const entrada = CIUDADES;
    const query = slug.toLowerCase();

    entrada.forEach(item => {
      if (item.slug.toLowerCase().indexOf(query) > -1) {
        devolver.push(item);
      }
    });

    return devolver;
  }
}
