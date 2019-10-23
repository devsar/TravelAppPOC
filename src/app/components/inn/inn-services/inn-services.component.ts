import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-services',
  templateUrl: './inn-services.component.html',
  styleUrls: ['./inn-services.component.scss'],
})
export class InnServicesComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
