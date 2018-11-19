import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../Core/components/dashboard/dashboard.component';
import { LoginComponent } from '../Core/components/login/login.component';
import { RegisterComponent } from '../Core/components/register/register.component';
import { AddClientComponent } from '../Clients/components/add-client/add-client.component';
import { EditClientComponent } from '../Clients/components/edit-client/edit-client.component';
import { ClientDetailsComponent } from '../Clients/components/client-details/client-details.component';
import { SettingsComponent } from '../Core/components/settings/settings.component';
import { NotFoundComponent } from '../Core/components/not-found/not-found.component';

import { AuthGuard } from '../Shared/guards/auth.guard';
import { RegisterGuard } from '../Shared/guards/register.guard';

const routes: Routes = [
 { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
 { path: 'client/add', component: AddClientComponent, canActivate: [AuthGuard] },
 { path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuard] },
 { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
 { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
 { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
