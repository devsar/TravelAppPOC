import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InnPage } from './inn.page';
import { InnHeaderComponent } from 'src/app/components/inn/inn-header/inn-header.component';
import { InnBriefComponent } from 'src/app/components/inn/inn-brief/inn-brief.component';
import { InnGalleryComponent } from 'src/app/components/inn/inn-gallery/inn-gallery.component';
import { InnServicesComponent } from 'src/app/components/inn/inn-services/inn-services.component';
import { InnLocationComponent } from 'src/app/components/inn/inn-location/inn-location.component';
import { InnReviewsComponent } from 'src/app/components/inn/inn-reviews/inn-reviews.component';
import { InnHostComponent } from 'src/app/components/inn/inn-host/inn-host.component';
import { AgmCoreModule, AgmMap } from '@agm/core';
import { InnReviewComponent } from 'src/app/components/inn/inn-review/inn-review.component';



@NgModule({
  declarations: [InnPage,
    InnHeaderComponent,
    InnBriefComponent,
    InnGalleryComponent,
    InnServicesComponent,
    InnLocationComponent,
    InnReviewsComponent,
    InnReviewComponent,
    InnHostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: InnPage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAS8mPDdHeLG3ajmFSHdICf2Qynes0AGgM'
    })
  ],
})
export class InnModule { }
