import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TemplateSection } from '../../../../shared/interfaces/template-section.interface';

@Injectable({
  providedIn: 'root',
})
export class TemplateSectionService {
  constructor() {}

  getTemplateSections(): Observable<TemplateSection[]> {
    const templateSections: TemplateSection[] = [
      {
        id: '1',
        height: '400px',
        parallax: true,
        media: 'image.jpg',
        alignItems: 'center',
        text: 'Welcome',
        innerHTML: '<h1>Welcome</h1>',
        fields: ['field1', 'field2'],
      },
      {
        id: '2',
        height: '300px',
        parallax: false,
        media: 'video.mp4',
        alignItems: 'left',
        text: 'Introduction',
        innerHTML: '<p>Introduction</p>',
        fields: ['field3'],
      },
      {
        id: '3',
        height: '500px',
        parallax: true,
        media: 'image2.jpg',
        alignItems: 'right',
        text: 'Details',
        innerHTML: '<div>Details</div>',
        fields: ['field4', 'field5'],
      },
    ];
    return of(templateSections);
  }
}
