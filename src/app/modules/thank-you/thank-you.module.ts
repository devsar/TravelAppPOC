import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThankYouPage } from './thank-you.page';



@NgModule({
  declarations: [ThankYouPage],
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
