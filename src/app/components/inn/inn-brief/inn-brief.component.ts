import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-brief',
  templateUrl: './inn-brief.component.html',
  styleUrls: ['./inn-brief.component.scss'],
})
export class InnBriefComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
