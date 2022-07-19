import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'carslot',
    loadChildren: () =>
      import('./modules/car-slot/car-slot.module').then((m) => m.CarSlotModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./modules/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
