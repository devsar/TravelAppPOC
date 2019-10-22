import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CiudadPage } from './modules/ciudad/ciudad.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)},
  { path: 'city/:slug',  loadChildren: () => import('./modules/ciudad/ciudad.module').then( m => m.CiudadModule)},
  { path: 'inn/:id',  loadChildren: () => import('./modules/inn/inn.module').then( m => m.InnModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
