import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/types/review';

@Component({
  selector: 'app-inn-review',
  templateUrl: './inn-review.component.html',
  styleUrls: ['./inn-review.component.scss'],
})
export class InnReviewComponent implements OnInit {

  @Input() reviewdata: Review;

  constructor() { }

  ngOnInit() {}

}
