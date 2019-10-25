import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThankYouPage } from './thank-you.page';
import { ThankYouHeaderComponent } from 'src/app/components/thank-you/thank-you-header/thank-you-header.component';
import { ThankYouBodyComponent } from 'src/app/components/thank-you/thank-you-body/thank-you-body.component';



@NgModule({
  declarations: [ThankYouPage, ThankYouHeaderComponent, ThankYouBodyComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThankYouPage
      }
    ]),
  ],
})
export class ThankYouModule { }
