import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { MainPageComponent } from '@modules/home/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'errors',
    loadChildren: () => import('@modules/errors/errors.module').then(e => e.ErrorsModule)
  },
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () => import('@modules/home/home.module').then(h => h.HomeModule),
    canActivate: [SessionGuard], //* para que no se pueda acceder sin estar logueado
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
