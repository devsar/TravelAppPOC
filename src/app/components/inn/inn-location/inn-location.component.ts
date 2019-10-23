import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';


@Component({
  selector: 'app-inn-location',
  templateUrl: './inn-location.component.html',
  styleUrls: ['./inn-location.component.scss'],
})
export class InnLocationComponent implements OnInit {

  zoomed = false;
  draggable = false;

  @Input() inndata: Inn;

  constructor() { }

  ngOnInit() {}

  zoomIn() {
    const map: Element = document.getElementsByClassName('agm-map')[0];
    map.classList.add('zoomed');
    this.zoomed = true;
    this.draggable = true;
  }

  zoomOut() {
    const map: Element = document.getElementsByClassName('agm-map')[0];
    map.classList.remove('zoomed');
    this.zoomed = false;
    this.draggable = false;
  }

}
