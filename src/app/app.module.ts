import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignUpCodeComponent} from './auth/sign-up-code/sign-up-code.component';
import {AuthComponent} from './auth/auth.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuardService} from "./auth/auth-guard.service";
import {AuthService} from "./auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SignUpCodeComponent,
    AuthComponent,
    DashboardComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'auth', component: AuthComponent},
      {path: 'auth/sign-in', component: SignInComponent},
      {path: 'auth/sign-up', component: SignUpComponent},
      {path: 'auth/sign-up-code', component: SignUpCodeComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
      {path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuardService]},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
