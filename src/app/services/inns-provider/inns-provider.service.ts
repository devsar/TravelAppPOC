import { Injectable } from '@angular/core';
import { Inn } from '../../types/inn';
import { INNS } from '../../mockdata/mockinns';

@Injectable({
  providedIn: 'root'
})
export class InnsProviderService {

  constructor() { }

  getInns(citySlug: string): Inn[] {
    return INNS.filter( (el) => el.city.slug === citySlug);
  }

  getInn(innId: string): Inn {
    const innIdNumber = +innId;
    return INNS.find( (el) => el.id === innIdNumber);
  }
}
