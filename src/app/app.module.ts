import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DateComponent } from './components/date/date.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',      component: DateComponent },
  { path: 'onboarding',      component: OnboardingComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DateComponent,
    OnboardingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
