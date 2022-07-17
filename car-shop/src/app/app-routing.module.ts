import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSlotComponent } from './car-slot/car-slot.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'},{ path: 'home', component: HomeComponent },
{ path: 'contact-us', component: ContactUsComponent },{ path: 'carslot', component: CarSlotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
