import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/presentation.component';
import { PlanosComponent } from './presentation/planos/planos.component';
import { DispositivosComponent } from './presentation/dispositivos/dispositivos.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CancelamentoComponent } from './presentation/cancelamento/cancelamento.component';
import { SigninComponent } from './user/signin/sign-in.component';
import { SignupComponent } from './user/signup/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanosComponent,
    DispositivosComponent,
    CancelamentoComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
