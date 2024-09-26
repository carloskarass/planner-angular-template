import { Injectable } from '@angular/core';
import { TableLinen } from '../../../../shared/interfaces/table-linen.interface';

@Injectable({
  providedIn: 'root',
})
export class TablesLinenService {
  private tableLinens: TableLinen[] = [
    { _id: '1', name: 'Classic White Linen', color: 'White', size: 'Large', quantity: '50' },
    { _id: '2', name: 'Royal Blue Linen', color: 'Blue', size: 'Medium', quantity: '30' },
    { _id: '3', name: 'Elegant Black Linen', color: 'Black', size: 'Small', quantity: '20' },
    { _id: '4', name: 'Golden Linen', color: 'Gold', size: 'Large', quantity: '25' },
    { _id: '5', name: 'Ivory Linen', color: 'Ivory', size: 'Medium', quantity: '40' },
  ];

  getTableLinens(): TableLinen[] {
    return this.tableLinens;
  }
}
