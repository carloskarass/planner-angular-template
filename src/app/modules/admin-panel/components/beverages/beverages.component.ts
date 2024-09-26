import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PBackTitleModule } from '../../../../shared/components/p-back-title/p-back-title.module';
import { PDataGridModule } from '../../../../shared/components/p-data-grid/p-data-grid.module';
import { Beverage } from '../../../../shared/interfaces/beverage.interface';
import { IColumn } from '../../../../shared/interfaces/colum.interface';
import { BeverageService } from '../../services/beverages/beverages.service';

@Component({
  selector: 'app-beverages',
  standalone: true,
  imports: [CommonModule, PDataGridModule, PBackTitleModule],
  templateUrl: './beverages.component.html',
  styleUrl: './beverages.component.scss',
})
export class BeveragesComponent implements OnInit {
  constructor(private beverageService: BeverageService) {}

  dataSource = new MatTableDataSource<Beverage>();
  columns: IColumn[] = [
    { field: 'key', order: 0, label: 'Clave' },
    { field: 'brand', order: 1, label: 'Marca' },
    { field: 'size', order: 2, label: 'Tamaño' },
    { field: 'package', order: 3, label: 'Embalaje' },
  ];

  async ngOnInit() {
    this.getBeverages();
  }

  async getBeverages() {
    const beverages = await this.beverageService.getBeverages();
    console.log(beverages);

    this.dataSource = new MatTableDataSource<Beverage>(beverages);
  }
}
