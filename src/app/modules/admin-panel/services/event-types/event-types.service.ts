import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventType } from '../../../../shared/interfaces/event-type.interface';

@Injectable({
  providedIn: 'root',
})
export class EventTypesService {
  constructor() {}

  getEventTypes(): Observable<EventType[]> {
    const eventTypes: EventType[] = [
      { id: '1', key: 'birthday', description: 'Birthday Party', status: true },
      { id: '2', key: 'wedding', description: 'Wedding Ceremony', status: true },
      { id: '3', key: 'corporate', description: 'Corporate Event', status: false },
    ];
    return of(eventTypes);
  }
}
