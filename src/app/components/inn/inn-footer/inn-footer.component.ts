import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-footer',
  templateUrl: './inn-footer.component.html',
  styleUrls: ['./inn-footer.component.scss'],
})
export class InnFooterComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
