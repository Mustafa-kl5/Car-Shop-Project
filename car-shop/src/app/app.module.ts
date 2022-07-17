import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarSlotComponent } from './car-slot/car-slot.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    CarSlotComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule, 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
