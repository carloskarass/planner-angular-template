import { TemplateSection } from './template-section.interface';

export interface Template {
  id: string;
  description: string;
  templateTypeId: string;
  sections: TemplateSection[];
}
