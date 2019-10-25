import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CiudadPage } from './modules/ciudad/ciudad.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)},
  { path: 'city/:slug',  loadChildren: () => import('./modules/ciudad/ciudad.module').then( m => m.CiudadModule)},
  { path: 'inn/:id',  loadChildren: () => import('./modules/inn/inn.module').then( m => m.InnModule)},
  { path: 'inn/:id/book',  loadChildren: () => import('./modules/reservation/reservation.module').then( m => m.ReservationModule)},
  { path: 'inn/:id/book/pay',  loadChildren: () => import('./modules/payment/payment.module').then( m => m.PaymentModule)},
  { path: 'inn/:id/book/thank-you',  loadChildren: () => import('./modules/thank-you/thank-you.module').then( m => m.ThankYouModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
