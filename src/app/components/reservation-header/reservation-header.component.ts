import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-header',
  templateUrl: './reservation-header.component.html',
  styleUrls: ['./reservation-header.component.scss'],
})
export class ReservationHeaderComponent implements OnInit {

  @Input() paso: number;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
