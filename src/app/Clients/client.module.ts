import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

@NgModule({
  declarations: [
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule
  ]
})
export class ClientModule { }
