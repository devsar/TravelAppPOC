import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CiudadPage } from './ciudad.page';
import { CityHeaderComponent } from 'src/app/components/city-header/city-header.component';
import { InnCardComponent } from 'src/app/components/inn-card/inn-card.component';
import { InnsProviderService } from 'src/app/services/inns-provider/inns-provider.service';


@NgModule({
  declarations: [CiudadPage, CityHeaderComponent, InnCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CiudadPage
      }
    ])
  ],
  providers: [InnsProviderService],
})
export class CiudadModule { }
