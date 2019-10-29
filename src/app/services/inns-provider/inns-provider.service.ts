import { Injectable } from '@angular/core';
import { Inn } from '../../types/inn';
import { INNS } from '../../mockdata/mockinns';

@Injectable({
  providedIn: 'root'
})
export class InnsProviderService {

  constructor() { }

  getInns(citySlug: string): Inn[] {

    /* Shuffles the array */
    for (let i = 0; i < INNS.length; i++) {
      const j = Math.floor(Math.random() * i);
      const temp = INNS[i];
      INNS[i] = INNS[j];
      INNS[j] = temp;
    }
    return INNS.filter( (el) => el.city.slug === citySlug);
  }

  getInn(innId: string): Inn {
    const innIdNumber = +innId;
    return INNS.find( (el) => el.id === innIdNumber);
  }
}
