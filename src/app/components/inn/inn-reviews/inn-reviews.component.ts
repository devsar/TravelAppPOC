import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-reviews',
  templateUrl: './inn-reviews.component.html',
  styleUrls: ['./inn-reviews.component.scss'],
})
export class InnReviewsComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
