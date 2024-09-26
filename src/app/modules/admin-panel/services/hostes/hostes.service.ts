import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Host } from '../../../../shared/interfaces/host.interface';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  constructor() {}

  getHosts(): Observable<Host[]> {
    const hosts: Host[] = [
      { id: '1', name: 'Michael', lastName: 'Jordan', cellphone: '555-1111', email: 'mj@example.com', street: 'Maple', number: '23', zipCode: '90210', suburb: 'Beverly Hills', state: 'California', country: 'USA', status: true },
      { id: '2', name: 'Kobe', lastName: 'Bryant', cellphone: '555-2222', email: 'kb@example.com', street: 'Pine', number: '24', zipCode: '90211', suburb: 'Beverly Hills', state: 'California', country: 'USA', status: true },
      { id: '3', name: 'LeBron', lastName: 'James', cellphone: '555-3333', email: 'lj@example.com', street: 'Oak', number: '6', zipCode: '90212', suburb: 'Los Angeles', state: 'California', country: 'USA', status: false },
    ];
    return of(hosts);
  }
}
