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
import { UserService } from './shared/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './auth/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { NewProfileService } from './new-profile/service/new-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanosComponent,
    DispositivosComponent,
    CancelamentoComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    NewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    NewProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
