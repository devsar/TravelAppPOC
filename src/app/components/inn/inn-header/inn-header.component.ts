import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-header',
  templateUrl: './inn-header.component.html',
  styleUrls: ['./inn-header.component.scss'],
})
export class InnHeaderComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
