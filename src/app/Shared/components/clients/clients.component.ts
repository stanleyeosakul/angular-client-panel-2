import { Component, OnInit } from '@angular/core';
import { faArrowCircleRight, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from 'src/app/Shared/services/client.service';

import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  // Icons
  faArrowCircleRight = faArrowCircleRight;
  faUsers = faUsers;

  clients: Client[];
  totalOwed: number;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      return total + parseFloat(client.balance.toString());
    }, 0);

  }

}
