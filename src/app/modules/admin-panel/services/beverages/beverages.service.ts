import { Injectable } from '@angular/core';
import { Beverage } from '../../../../shared/interfaces/beverage.interface';

// Si definiste la interfaz en un archivo separado, la importas aquí.

@Injectable({
  providedIn: 'root',
})
export class BeverageService {
  // Simulación de datos de ejemplo
  private beverages: Beverage[] = [
    { id: '1', key: 'bev001', brand: 'Coca-Cola', size: '500ml', package: 'bottle', status: 'available' },
    { id: '2', key: 'bev002', brand: 'Pepsi', size: '500ml', package: 'bottle', status: 'out of stock' },
    { id: '3', key: 'bev003', brand: 'Fanta', size: '500ml', package: 'bottle', status: 'available' },
  ];

  constructor() {}

  // Método que retorna un Observable de un array de objetos de tipo Beverage
  getBeverages() {
    return this.beverages; // Usamos el operador 'of' para retornar los datos simulados como un Observable
  }
}
