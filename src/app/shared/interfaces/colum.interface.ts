export interface IColumn {
  order?: number;
  label: string;
  field: string;
  visible?: false;
  filterable?: boolean;
  width?: string;
}
