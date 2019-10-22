import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TopbarComponent } from 'src/app/components/topbar/topbar.component';
import { TarjetaCiudadComponent } from 'src/app/components/tarjeta-ciudad/tarjeta-ciudad.component';
import { HomeSearchbarComponent } from 'src/app/components/home-searchbar/home-searchbar.component';
import { CiudadesProviderService } from 'src/app/services/ciudades-provider/ciudades-provider.service';
import { TarjetaCiudadSkeletonComponent } from 'src/app/components/tarjeta-ciudad-skeleton/tarjeta-ciudad-skeleton.component';

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
  declarations: [HomePage, TopbarComponent, TarjetaCiudadComponent, HomeSearchbarComponent, TarjetaCiudadSkeletonComponent],
  providers: [CiudadesProviderService],
})
export class HomePageModule {}
