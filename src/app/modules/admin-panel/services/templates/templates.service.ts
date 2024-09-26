import { Injectable } from '@angular/core';
import { TemplateSection } from '../../../../shared/interfaces/template-section.interface';
import { Template } from '../../../../shared/interfaces/template.interface';
import { TemplateSectionService } from '../template-sections/template-sections.service';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  private templates: Template[] = [
    {
      id: '1',
      description: 'Corporate Template',
      templateTypeId: '1',
      sections: [],
    },
    {
      id: '2',
      description: 'Wedding Template',
      templateTypeId: '2',
      sections: [],
    },
    {
      id: '3',
      description: 'Birthday Template',
      templateTypeId: '3',
      sections: [],
    },
  ];

  constructor(private templateSectionService: TemplateSectionService) {}

  getTemplates(): Template[] {
    let sections: TemplateSection[];

    this.templateSectionService.getTemplateSections().subscribe((res) => {
      sections = res;
    });

    this.templates.map((template) => {
      template.sections = sections;
    });

    return this.templates;
  }
}
