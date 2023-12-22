import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('@modules/events/events.module').then(e => e.EventsModule)
  },
  {
    path: 'wait-reservations',
    loadChildren: () => import('@modules/wait-reservations/wait-reservations.module').then(w => w.WaitReservationsModule)
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
