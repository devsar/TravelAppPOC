import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Inn } from 'src/app/types/inn';
import { InnsProviderService } from 'src/app/services/inns-provider/inns-provider.service';

@Component({
  selector: 'app-inn',
  templateUrl: './inn.page.html',
  styleUrls: ['./inn.page.scss'],
})
export class InnPage implements OnInit {

  inndata: Inn;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ipService: InnsProviderService) { }

  ngOnInit() {
    setTimeout( () => {
      this.getInn();
    }, 1000);
  }

  getInn() {
    const id = this.route.snapshot.paramMap.get('id');
    this.inndata = this.ipService.getInn(id);
  }

}
