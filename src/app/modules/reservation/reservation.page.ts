import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Inn } from 'src/app/types/inn';
import { InnsProviderService } from 'src/app/services/inns-provider/inns-provider.service';
import { Reservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})

export class ReservationPage implements OnInit {

  inndata: Inn;
  reservationdata: Reservation = {
    id: 0,
    dateIn: '',
    dateOut: '',
    pricePerNight: 0,
    platformCharge: 0,
    taxes: 0,
    adults: 0,
    children: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ipService: InnsProviderService) { }


    ngOnInit() {
      setTimeout( () => {
        this.getInn();
      }, 1000);
    }

    getInn() {
      const id = this.route.snapshot.paramMap.get('id');
      this.inndata = this.ipService.getInn(id);
    }

    updateReservationGuests(data: Reservation): void {
      this.reservationdata.adults = data.adults;
      this.reservationdata.children = data.children;
    }

    updateReservationDates(data: Reservation): void {
      this.reservationdata.dateIn = data.dateIn;
      this.reservationdata.dateOut = data.dateOut;
    }

}
