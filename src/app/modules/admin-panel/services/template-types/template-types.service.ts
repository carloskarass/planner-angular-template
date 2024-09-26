import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TemplateType } from '../../../../shared/interfaces/template-type.interface';

@Injectable({
  providedIn: 'root',
})
export class TemplateTypesService {
  constructor() {}

  getTemplateTypes(): Observable<TemplateType[]> {
    const templateTypes: TemplateType[] = [
      { id: '1', key: 'formal', description: 'Formal Template', status: true },
      { id: '2', key: 'casual', description: 'Casual Template', status: true },
      { id: '3', key: 'luxury', description: 'Luxury Template', status: false },
    ];
    return of(templateTypes);
  }
}
