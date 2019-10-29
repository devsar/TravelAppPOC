import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentPage } from './payment.page';
import { ReservationBriefComponent } from 'src/app/components/payment/reservation-brief/reservation-brief.component';
import { PaymentCheckoutComponent } from 'src/app/components/payment/payment-checkout/payment-checkout.component';
import { ReservationMessageComponent } from 'src/app/components/payment/reservation-message/reservation-message.component';
import { PaymentFooterComponent } from 'src/app/components/payment/payment-footer/payment-footer.component';
import { ReservationHeaderModule } from '../reservation-header/reservation-header.module';
import { PaymentFormComponent } from 'src/app/components/payment/payment-form/payment-form.component';
import { DateProviderService } from 'src/app/services/date-provider/date-provider.service';


@NgModule({
  declarations: [
    PaymentPage,
    ReservationBriefComponent,
    PaymentCheckoutComponent,
    ReservationMessageComponent,
    PaymentFooterComponent,
    PaymentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationHeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaymentPage
      }
    ]),
  ],
  providers: [DateProviderService]
})
export class PaymentModule { }
