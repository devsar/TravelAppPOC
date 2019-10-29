import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CiudadesProviderService } from 'src/app/services/ciudades-provider/ciudades-provider.service';
import { Ciudad } from 'src/app/types/ciudad';

@Component({
  selector: 'app-home-searchbar',
  templateUrl: './home-searchbar.component.html',
  styleUrls: ['./home-searchbar.component.scss'],
})
export class HomeSearchbarComponent implements OnInit {

  @Output() propagar = new EventEmitter<Ciudad[]>();

  searchStr = '';

  constructor(private cpService: CiudadesProviderService) { }

  ngOnInit() {}

  filterCities() {
    setTimeout( () => {
      this.emitir(this.cpService.filterCities(this.searchStr));
    }, 500);
  }

  emitir(filteredCities: Ciudad[]) {
    this.propagar.emit(filteredCities);
  }

}
