import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-gallery',
  templateUrl: './inn-gallery.component.html',
  styleUrls: ['./inn-gallery.component.scss'],
})
export class InnGalleryComponent implements OnInit {

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

}
