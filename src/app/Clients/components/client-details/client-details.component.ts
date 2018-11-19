import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../Shared/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { faArrowCircleLeft, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { Client } from '../../../Shared/models/Client';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styles: []
})
export class ClientDetailsComponent implements OnInit {

  // Icons
  faArrowCircleLeft = faArrowCircleLeft;
  faPencilAlt = faPencilAlt;

  id: string;
  client: Client;
  hasBalance = false;
  showBalanceUpdateInput = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    // Get ID from URL
    this.id = this.route.snapshot.params['id'];

    // Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client != null) {
        if (client.balance > 0) this.hasBalance = true;
      }
      this.client = client;
    });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updated', {
      cssClass: 'alert-success', timeout: 4000
    });
  }

  onDeleteClick() {
    if (confirm('Are you sure?')) {
      this.clientService.deleteClient(this.client);
      this.flashMessage.show('Client removed', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    }
  }

}
