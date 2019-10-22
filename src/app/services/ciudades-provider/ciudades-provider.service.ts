import { Injectable } from '@angular/core';
import { Ciudad } from '../../types/ciudad';
import { CIUDADES } from '../../mockdata/mockcities';

@Injectable({
  providedIn: 'root'
})
export class CiudadesProviderService {

  constructor() { }

  getCities(): Ciudad[] {
    return CIUDADES;
  }

  getCity(slug: string): Ciudad {
    return CIUDADES.find((el) => el.slug === slug);
  }
}
