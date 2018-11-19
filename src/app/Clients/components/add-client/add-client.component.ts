import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { ClientService } from '../../../Shared/services/client.service';

import { Client } from '../../../Shared/models/Client';
import { SettingsService } from '../../../Shared/services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styles: []
})
export class AddClientComponent implements OnInit {

  // Icons
  faArrowCircleLeft = faArrowCircleLeft;

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };
  disableBalanceOnAdd: boolean;

  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private settingsService: SettingsService,
    private router: Router) { }

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if (this.disableBalanceOnAdd) value.balance = 0;

    if (!valid) {
      // Show error message
      this.flashMessage.show(
        'Please fill out the form correctly',
        { cssClass: 'alert-danger', timeout: 4000 }
        );

    } else {
      // Add new client
      this.clientService.newClient(value);

      // Show success message
      this.flashMessage.show(
        'New client added',
        { cssClass: 'alert-success', timeout: 4000 }
        );

      // Redirect to dashboard
      this.router.navigate(['/']);
    }

  }

}
