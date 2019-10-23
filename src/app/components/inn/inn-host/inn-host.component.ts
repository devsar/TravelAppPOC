import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-host',
  templateUrl: './inn-host.component.html',
  styleUrls: ['./inn-host.component.scss'],
})
export class InnHostComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
