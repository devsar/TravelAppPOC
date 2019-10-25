import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss'],
})
export class PaymentCheckoutComponent implements OnInit {

  @Input() reservationdata: Reservation;

  constructor() { }

  ngOnInit() {}

}
