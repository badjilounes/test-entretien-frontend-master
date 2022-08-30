import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { EmployeeDetails } from 'src/app/core/api/server/data.interface';
import { AddressPipeModule } from 'src/app/shared/business/pipes/address-pipe.module';
import { EmployeesPageStore } from '../../employees-page.store';
import { EmployeesListDataSource } from './employees-list-datasource';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AddressPipeModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
})
export class EmployeesListComponent implements OnChanges {
  @Input() employees: EmployeeDetails[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EmployeeDetails>;

  dataSource: EmployeesListDataSource = new EmployeesListDataSource();

  displayedColumns = ['nom', 'address', 'active', 'actions'];

  constructor(private readonly store: EmployeesPageStore) {}

  ngOnChanges(): void {
    this.dataSource = new EmployeesListDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.employees;

    if (this.table) {
      this.table.dataSource = this.dataSource;
    }
  }

  editEmployee(employee: EmployeeDetails) {
    this.store.openCreateOrEditEmployeeDialog(employee);
  }
}
