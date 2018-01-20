import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DateComponent } from './components/date/date.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { SurveyComponent } from './components/survey/survey.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',      component: DateComponent, canActivate: [AuthGuard] },
  { path: 'onboarding',      component: OnboardingComponent, canActivate: [AuthGuard] },
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DateComponent,
    OnboardingComponent,
    SurveyComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }