import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-services',
  templateUrl: './inn-services.component.html',
  styleUrls: ['./inn-services.component.scss'],
})
export class InnServicesComponent implements OnInit {

  skeletonIcons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
