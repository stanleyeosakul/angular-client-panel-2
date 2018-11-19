import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../Shared/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { Client } from '../../../Shared/models/Client';
import { SettingsService } from '../../../Shared/services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styles: []
})
export class EditClientComponent implements OnInit {

  // Icons
  faArrowCircleLeft = faArrowCircleLeft;

  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };
  disableBalanceOnEdit: boolean;

  constructor(
    private clientService: ClientService,
    private settingsService: SettingsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    // Get ID from URL
    this.id = this.route.snapshot.params['id'];

    // Get Client
    this.clientService.getClient(this.id).subscribe(client => this.client = client);

    // Disable Balance on Edit?
    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // Add ID to client
      value.id = this.id;

      // Update client
      this.clientService.updateClient(value);
      this.flashMessage.show('Client updated', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/client/' + this.id]);
    }
  }

}
