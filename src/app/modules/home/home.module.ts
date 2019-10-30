import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TopbarComponent } from 'src/app/components/home/topbar/topbar.component';
import { TarjetaCiudadComponent } from 'src/app/components/home/tarjeta-ciudad/tarjeta-ciudad.component';
import { HomeSearchbarComponent } from 'src/app/components/home/home-searchbar/home-searchbar.component';
import { CiudadesProviderService } from 'src/app/services/ciudades-provider/ciudades-provider.service';
import { CityCardSkeletonComponent } from 'src/app/components/skeletons/city-card-skeleton/city-card-skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TopbarComponent, TarjetaCiudadComponent, HomeSearchbarComponent, CityCardSkeletonComponent],
  providers: [CiudadesProviderService],
})
export class HomePageModule {}
