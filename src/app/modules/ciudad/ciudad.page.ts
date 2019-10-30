import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CiudadesProviderService } from 'src/app/services/ciudades-provider/ciudades-provider.service';
import { Inn } from 'src/app/types/inn';
import { InnsProviderService } from 'src/app/services/inns-provider/inns-provider.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.page.html',
  styleUrls: ['./ciudad.page.scss'],
})
export class CiudadPage implements OnInit {

  citydata: any;
  cityinns: Inn[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cpService: CiudadesProviderService,
    private ipService: InnsProviderService
  ) {}

  ngOnInit() {
    setTimeout( () => {
      this.getCity();
      this.getInns(this.citydata.slug);
    }, 1000);
  }

  getCity() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.citydata = this.cpService.getCity(slug);
  }

  getInns(citySlug: string) {
    this.cityinns = this.ipService.getInns(citySlug);
  }

}
