import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitReservationsRoutingModule } from './wait-reservations-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    WaitReservationsRoutingModule
  ]
})
export class WaitReservationsModule { }
