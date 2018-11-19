import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './Routing/app.routing.module';
import { ClientModule } from './Clients/client.module';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    ClientModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
