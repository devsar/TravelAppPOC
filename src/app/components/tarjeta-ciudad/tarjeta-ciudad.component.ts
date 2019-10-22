import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-ciudad',
  templateUrl: './tarjeta-ciudad.component.html',
  styleUrls: ['./tarjeta-ciudad.component.scss'],
})
export class TarjetaCiudadComponent implements OnInit {

  @Input() citydata;

  constructor() { }

  ngOnInit() {}

}
