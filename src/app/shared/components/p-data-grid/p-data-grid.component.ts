import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IColumn } from '../../interfaces/colum.interface';

@Component({
  selector: 'p-data-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exportAs: 'PDataGridModule',
  templateUrl: './p-data-grid.component.html',
  styleUrl: './p-data-grid.component.scss',
})
export class PDataGridComponent implements AfterViewInit {
  displayedColumns: string[] = [];

  filter = new FormControl('');

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() columns: IColumn[] = [];
  @Input()
  dataSource!: MatTableDataSource<any>;

  ngAfterViewInit() {
    this.displayedColumns = this.columns.map((col) => col.field);
    // if (this.dataSource) {
    //   this.dataSource.paginator = this.paginator;
    // }
  }

  getHeaderColumns(): string[] {
    return this.columns.map((col) => col.field);
  }
}
