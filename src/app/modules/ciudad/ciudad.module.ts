import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CiudadPage } from './ciudad.page';
import { CityHeaderComponent } from 'src/app/components/city/city-header/city-header.component';
import { InnsProviderService } from 'src/app/services/inns-provider/inns-provider.service';
import { InnCardComponent } from 'src/app/components/city/inn-card/inn-card.component';
import { CityHeaderSkeletonComponent } from 'src/app/components/skeletons/city-header-skeleton/city-header-skeleton.component';
import { InnCardSkeletonComponent } from 'src/app/components/skeletons/inn-card-skeleton/inn-card-skeleton.component';


@NgModule({
  declarations: [CiudadPage, CityHeaderComponent, InnCardComponent, InnCardSkeletonComponent, CityHeaderSkeletonComponent],
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
