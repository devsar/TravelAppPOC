import { Component, OnInit, Input } from '@angular/core';
import { Inn } from 'src/app/types/inn';

@Component({
  selector: 'app-inn-gallery',
  templateUrl: './inn-gallery.component.html',
  styleUrls: ['./inn-gallery.component.scss'],
})
export class InnGalleryComponent implements OnInit {

  @Input() inndata: Inn;

  agrandada = false;

  constructor() { }

  ngOnInit() {}

  agrandarImagen(event: Event): void {
    const img = event.target as Element;
    const obscure = document.getElementsByClassName('obscure')[0];
    if (!this.agrandada) {
      obscure.classList.remove('hide');
      img.classList.add('agrandar');
      this.agrandada = true;
    } else {
      obscure.classList.add('hide');
      img.classList.remove('agrandar');
      this.agrandada = false;
    }
  }

}
