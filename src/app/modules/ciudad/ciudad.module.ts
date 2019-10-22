import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CiudadPage } from './ciudad.page';
import { CityHeaderComponent } from 'src/app/components/city-header/city-header.component';


@NgModule({
  declarations: [CiudadPage, CityHeaderComponent],
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
})
export class CiudadModule { }
