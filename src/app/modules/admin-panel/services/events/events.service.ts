import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../../../../shared/interfaces/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  getEvents(): Observable<Event[]> {
    const events: Event[] = [
      {
        id: '1',
        eventTypeId: '1',
        name: 'Birthday Bash',
        date: new Date('2024-12-01'),
        duration: 4,
        numberGuests: 50,
        tablesAmount: 5,
        hostId: '1',
        beverageId: '1',
        beverageAmount: 10,
        tableLinenBaseColor: 'red',
        tableLinenSecondColor: 'white',
        securityGuards: 2,
        recepcionist: 'Yes',
        sendConfirmAssistance: true,
        sendQRPass: true,
      },
      {
        id: '2',
        eventTypeId: '2',
        name: 'Corporate Gala',
        date: new Date('2025-01-15'),
        duration: 6,
        numberGuests: 100,
        tablesAmount: 10,
        hostId: '2',
        beverageId: '2',
        beverageAmount: 20,
        tableLinenBaseColor: 'blue',
        tableLinenSecondColor: 'gold',
        securityGuards: 4,
        recepcionist: 'Yes',
        sendConfirmAssistance: false,
        sendQRPass: true,
      },
    ];
    return of(events);
  }
}
