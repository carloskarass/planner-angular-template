import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Guest } from '../../../../shared/interfaces/guest.interface';

@Injectable({
  providedIn: 'root',
})
export class GuestsService {
  constructor() {}

  getGuests(): Observable<Guest[]> {
    const guests: Guest[] = [
      {
        id: '1',
        eventId: '1',
        name: 'John',
        lastName: 'Doe',
        cellphone: '555-1234',
        email: 'john@example.com',
        invitationCode: 'QR001',
        isSpecialGuest: true,
        isConfirmed: false,
        status: true,
      },
      {
        id: '2',
        eventId: '1',
        name: 'Jane',
        lastName: 'Smith',
        cellphone: '555-5678',
        email: 'jane@example.com',
        invitationCode: 'QR002',
        isSpecialGuest: false,
        isConfirmed: true,
        status: true,
      },
      {
        id: '3',
        eventId: '2',
        name: 'Peter',
        lastName: 'Johnson',
        cellphone: '555-8765',
        email: 'peter@example.com',
        invitationCode: 'QR003',
        isSpecialGuest: true,
        isConfirmed: true,
        status: false,
      },
      {
        id: '4',
        eventId: '3',
        name: 'Anna',
        lastName: 'Brown',
        cellphone: '555-4321',
        email: 'anna@example.com',
        invitationCode: 'QR004',
        isSpecialGuest: false,
        isConfirmed: false,
        status: true,
      },
    ];
    return of(guests);
  }
}
