import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients',
      ref => ref.orderBy('lastName', 'asc'));
  }

  // Get client database
  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

    return this.clients;
  }

  // Add new client
  newClient(client: Client) {
    this.clientsCollection.add(client);
  }

  // Get client
  getClient(id: string): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Client;
          data.id = action.payload.id;
          return data;
        }
      }
    ));

    return this.client;
  }

  // Update client
  updateClient(client: Client) {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    this.clientDoc.update(client);
  }

  // Delete client
  deleteClient(client: Client) {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    this.clientDoc.delete();
  }
}
