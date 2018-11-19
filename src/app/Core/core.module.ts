import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
