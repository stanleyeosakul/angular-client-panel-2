import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Fire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    ClientsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports: [
    NavbarComponent,
    ClientsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
