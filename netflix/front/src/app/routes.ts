import { Routes } from '@angular/router';
import { PlanosComponent } from './presentation/planos/planos.component';
import { DispositivosComponent } from './presentation/dispositivos/dispositivos.component';
import { CancelamentoComponent } from './presentation/cancelamento/cancelamento.component';
import { HomeComponent } from './presentation/presentation.component';
import { SigninComponent } from './user/signin/sign-in.component';
import { SignupComponent } from './user/signup/sign-up.component';

export const appRoutes: Routes = [
  {
    path: 'planos',
    component: HomeComponent,
    children: [{ path: '', component: PlanosComponent }]
  },
  {
    path: 'dispositivos',
    component: HomeComponent,
    children: [{ path: '', component: DispositivosComponent }]
  },
  {
    path: 'cancelamento',
    component: HomeComponent,
    children: [{ path: '', component: CancelamentoComponent }]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];
